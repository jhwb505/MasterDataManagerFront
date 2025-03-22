'use client'
import { getUsersQueryParams } from '@/gen/endpoints/users/users.zod';
import { GetUsersParams } from '@/gen/models';
import { Button, Form, Input, Select, SelectItem } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

type Props = {
  defaultValues: GetUsersParams;
  onSubmit: (data: FormValue) => void  
}

export type FormValue = z.infer<typeof getUsersQueryParams>

const SearchForm = ({defaultValues, onSubmit}: Props) => {

  const {control, register, handleSubmit} = useForm<FormValue>({
    resolver: zodResolver(getUsersQueryParams),
    defaultValues: {
      id: '',
      role: '',
      ...defaultValues
    }
  })

  return (
    <section className='flex flex-col'>
      <h2 className='text-sm'>検索</h2>
      <Form 
        className="w-full flex flex-row gap-2 mt-1" validationBehavior='native' 
        onSubmit={handleSubmit(onSubmit)}>
        <Input 
          label="ユーザーID"
          size='sm'
          maxLength={8}
          variant='bordered'
          {...register('id')}
        />
        <Controller 
          name="role"
          control={control}
          render={({field}) => {
            return (
            <Select
              className='max-w-xs'
              variant='bordered'
              label='Role'
              size='sm'
              {...field}
              defaultSelectedKeys={['all']}
              selectedKeys={field.value ? [field.value] : ['all']}
              onChange={(e)=>{
                // field.onChangeメソッドを使って、react-hook-formに変更後の値を通知してあげる
                field.onChange(
                  e.target.value === 'all' ? undefined : e.target.value
                )
              }}
            >
              {
                [
                  {
                  key: 'all', 
                  label: 'すべて'
                  },
                  {
                  key: 'operator', 
                  label: 'OPERATOR'
                  }
                ].map((item)=>(
                  <SelectItem key={item.key}>{item.label}</SelectItem>
                ))
              }
            </Select>
            )
          }}
        />
        <Button type="submit" color="primary">検索</Button>
      </Form>
    </section>
  )
}

export default SearchForm