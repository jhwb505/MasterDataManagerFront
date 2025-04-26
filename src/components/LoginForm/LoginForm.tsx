'use client'

import { form, Button } from '@heroui/react'
import { Input } from '../ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '../ui/form'
import { z } from 'zod'
import { loginBody } from '@/gen/endpoints/public-auth/public-auth.zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLogin } from '@/gen/endpoints/public-auth/public-auth'

const LoginForm = () => {

  // 1.Formの型を定義する
  const formSchema = loginBody
  type FormValue = z.infer<typeof formSchema>

  // 2.Formの型定義をFormに適用する
  const form = useForm<FormValue>(
    {
      resolver: zodResolver(formSchema),       
      defaultValues: {
        username: "",
        password: ""
       },
    }
  );

  const {control, handleSubmit} = form

  const { trigger } = useLogin()

  const onSubmit = (formData: FormValue) => {
    // ここでクライアントコード呼び出し処理追加
    trigger(
      {
        username: formData.username,
        password: formData.password
      }
    )
  }


  return (
    <Form {...form}>
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <FormField
        control={control}
        name="username"
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
      <Button type="submit">ログイン</Button>
    </form>
  </Form>
  )
}

export default LoginForm
