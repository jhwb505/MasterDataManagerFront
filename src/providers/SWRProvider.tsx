'use client'

import { SWRConfig } from "swr"

type Props = {
  children: React.ReactNode
}

export const SWRProvider = ({children}:Props) => {
  return (
    <SWRConfig
      value={
        {
          revalidateIfStale: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
          shouldRetryOnError: false,
          keepPreviousData: true,
        }
      }
    >
      {children}
    </SWRConfig>
  )

}