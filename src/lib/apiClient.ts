import axios, {AxiosInstance, AxiosRequestConfig } from 'axios'
import qs from 'qs'
import { ForbiddenError } from './ForbiddenError'

let apiClient: AxiosInstance

async function fetchBaseUrl() : Promise<any> {
    try {
        const res : AxiosResponse<any,any> = await axios.get('api/config')
        return res.data.baseUrl
    }catch (error){
        console.error('Failed fetching base URL:', error)
        throw error
    }
}

export const init: () => Promise<void> = async () : Promise<void> => {
    if(!apiClient){
        const baseUrl = await fetchBaseUrl()
        apiClient = axios.create({
            withCredentials: true,
            baseURL: `${baseUrl}/xxx/api`,
        })
        apiClient.interceptors.response.use(
            (response:AxiosResponse<any,any>): AxiosResponse<any,any> => response,
            (error: any) : Promise<never> => {
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
        paramSerializer: function (params){
            return qs.stringfy(params, { arrayFormat: 'repeat' })
        },
    }).then(({data}) => data)
}