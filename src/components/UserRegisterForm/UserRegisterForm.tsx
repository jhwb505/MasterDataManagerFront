'use client'

import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import userRegisterFormSchema from '@/lib/formSchema'

const UserRegisterForm = () => {

  // 1.Formの型を定義する
  type FormValue = z.infer<typeof userRegisterFormSchema>

  // 2.Formの型定義をFormに適用する
  const form = useForm<FormValue>(
    {
      resolver: zodResolver(userRegisterFormSchema), // resolverにzodスキーマを指定することで、zodスキーマを用いた型チェックやバリデーションチェックを行うようになる
       defaultValues: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: ""
       },
    }
  );

  const {control, handleSubmit} = form

  const onSubmit = () => {
    // ここでクライアントコード呼び出し処理追加
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
  
        <FormField
          control={control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`First Name`}</FormLabel>
              <FormControl>
                <Input placeholder="TARO" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`Last Name`}</FormLabel>
              <FormControl>
                <Input placeholder="YAMADA" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`Email`}</FormLabel>
              <FormControl>
                <Input placeholder="MasterDataManager@gmail.com" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`Password`}</FormLabel>
              <FormControl>
                <Input placeholder="p@ssw0rd" type='password' {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">送信</Button>
      </form>
    </Form>
  )
}


export default UserRegisterForm