'use client'

import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerBody } from '@/gen/endpoints/public-auth/public-auth.zod'
import { useRegister } from '@/gen/endpoints/public-auth/public-auth'



const UserRegisterForm = () => {

  // 1.Formの型を定義する
  const formSchema = registerBody
  type FormValue = z.infer<typeof formSchema>

  // 2.Formの型定義をFormに適用する
  const form = useForm<FormValue>(
    {
      resolver: zodResolver(formSchema),       
      defaultValues: {
        first_name: "",
        last_name: "",
        email_address: "",
        password: ""
       },
    }
  );

  const {control, handleSubmit} = form

  const { trigger } = useRegister()

  const onSubmit = (formData: FormValue) => {
    // ここでクライアントコード呼び出し処理追加
    trigger(
      {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email_address: formData.email_address,
        password: formData.password
      }
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <FormField
          control={control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`First Name(名)`}</FormLabel>
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
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`Last Name(姓)`}</FormLabel>
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
          name="email_address"
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
        <Button type="submit">新規登録</Button>
      </form>
    </Form>
  )
}


export default UserRegisterForm