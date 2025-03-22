'use client'
import { parseAsBoolean, parseAsString, useQueryStates } from 'nuqs'
import React from 'react'
import SearchForm, { FormValue } from './SearchForm'
import SearchResult from './SearchResult'
import { useGetUsers } from '@/gen/endpoints/users/users'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import { useCallback } from 'react'

const UserList = () => {

  /**
   * 第1引数: クエリパラメータの状態を定義するオブジェクト
   * 第2引数: オプションの設定を行うオブジェクト
   */
  const [query, setQuery] = useQueryStates(
    {
      search: parseAsBoolean.withDefault(false), //各キーはURLのクエリパラメータの名前に対応する
      userId: parseAsString.withDefault(''),
      role: parseAsString.withDefault('')
    },
    {
      shallow: true,
      urlKeys: { // URLのクエリパラメータ名を変更するためのオプション
        userId: 'id'
      }
    }
  )

  const requestParams = {
    id: query.userId ?? undefined,
    role: query.role ?? undefined
  }

  const {data, error} = useGetUsers(requestParams, {
    swr: {
      enabled: query.search,
      onError: (err: unknown) => {
        if(err instanceof AxiosError){
          toast.error(
              typeof err.response?.data === 'string' ? err.response.data : err.message
            )
        }
      }
    }
  })

  const isFetched = !!(data || error)
  console.log(isFetched)

  // useCallbackを使ってレンダリングごとの関数の再生成を防ぐ
  const handleSubmit = useCallback((formData: FormValue)=>{
    setQuery({ // フォームの入力値をクエリパラメータに設定するが、入力値がundefinedやnullの場合は、空文字を設定する
      ...formData,
      userId: formData.id ?? '',
      role: formData.role ?? '',
      search: true
    })
  },[setQuery])

  return (
    <div className="mx-4 my-4">
      <SearchForm defaultValues={requestParams} onSubmit={handleSubmit} />
      <SearchResult users={data} isFetched={isFetched}/>
    </div>
  )
}

export default UserList