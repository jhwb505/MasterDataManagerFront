import { BreadcrumbItem, Breadcrumbs } from '@heroui/react'
import Link from 'next/link'
import React from 'react'

const UserDetailBreadcrumb = () => {
  return (   

    <>
      <div className='grid grid-cols-4 grid-rows-1 gap-4 m-4'>
        <div>
          <Breadcrumbs color="primary">
          <BreadcrumbItem>
            <Link href="/user">ユーザー情報一覧</Link>
          </BreadcrumbItem>
          <BreadcrumbItem isDisabled>
            <Link href="#">ユーザー詳細</Link>
          </BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>
    </>
  
  )
}

export default UserDetailBreadcrumb