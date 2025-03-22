import { UserResponse } from '@/gen/models'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {
  users: UserResponse[] | undefined;
  isFetched: boolean;
}

const SearchResult = ({ users, isFetched }: Props) => {

  const count = (users || [] ).length
  const router = useRouter()

  return (
    <section className='flex flex-col mt-2'>
      <div className='flex gap-2 mb-1'>
        <h3 className='text-sm leading-2'>該当件数</h3>
        {isFetched && <span className='text-sm'>{count}件</span>}
      </div>

      <Table aria-label='ユーザー一覧' removeWrapper focusMode='row' isStriped>
      <TableHeader>
        <TableColumn>ユーザーID</TableColumn>
        <TableColumn>姓</TableColumn>
        <TableColumn>名</TableColumn>
        <TableColumn>Role</TableColumn>
      </TableHeader>
      <TableBody emptyContent={isFetched ? '該当ユーザーなし' : '検索条件を指定して検索してください'}>
        {
         (users || []).map((user)=>{
          return (
            <TableRow key={user.userId} onClick={()=>{router.push(`user/detail/${user.userId}`)}}>
              <TableCell>{user?.userId}</TableCell>
              <TableCell>{user?.lastName}</TableCell>
              <TableCell>{user?.firstName}</TableCell>
              <TableCell>{user?.role}</TableCell>
            </TableRow>
          )
         })
        }
      </TableBody>
      </Table>
    </section>
  )
}

export default SearchResult