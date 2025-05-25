'use client'

import { Button } from '../ui/button'
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <FormField
        control={control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{`メールアドレス`}</FormLabel>
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
            <FormLabel>{`パスワード`}</FormLabel>
            <FormControl>
              <Input  placeholder="password" type='password' {...field} />
            </FormControl>
            <FormDescription>
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button className="mt-10" type="submit">ログイン</Button>
      <a href="#" className="flex flex-col items-center text-xs font-medium text-gray-600 hover:underline">ログインID・パスワードをお忘れの方</a>
    </form>
  </Form>
  )
}

export default LoginForm
