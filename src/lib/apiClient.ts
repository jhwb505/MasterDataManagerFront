import axios, {AxiosInstance, AxiosRequestConfig } from 'axios'
import qs from 'qs'
import { ForbiddenError } from './ForbiddenError'

let apiClient: AxiosInstance

async function fetchBaseUrl() {
    try {
        const res = await axios.get('api/config')
        return res.data.baseUrl
    }catch (error){
        console.error('Failed fetching base URL:', error)
        throw error
    }
}

export const init = async () => {
    if(!apiClient){
        const baseUrl = await fetchBaseUrl()
        apiClient = axios.create({
            withCredentials: true,
            baseURL: `${baseUrl}`,
        })
        apiClient.interceptors.response.use(
            (response) => response,
            (error) => {
                if(error?.response?.status === 403){
                    throw new ForbiddenError()
                }
                return Promise.reject(error)
            }
        )
    }
}

export const customInstance = async <T>(
    config: AxiosRequestConfig,
    options?: AxiosRequestConfig
): Promise<T> => {
    if(!apiClient){
        await init()
    }
    return apiClient({
        ...config,
        ...options,
        paramsSerializer: function (params){
            return qs.stringify(params, { arrayFormat: 'repeat' })
        },
    }).then(({data}) => data)
}