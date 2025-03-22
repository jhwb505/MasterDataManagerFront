'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import UserDetailBreadcrumb from './components/UserDetailBreadcrumb'
import UserDetailBody from './components/UserDetailBody'

const UserDetailPage = () => {
  
  // userParamsはパスパラメータを簡単に取得できるフック
  const params = useParams()
  const userId = params.userId as string
  console.log(userId)

  
  return (
    <>
      <UserDetailBreadcrumb></UserDetailBreadcrumb>
      <UserDetailBody></UserDetailBody>
    </>
  )
}

export default UserDetailPage