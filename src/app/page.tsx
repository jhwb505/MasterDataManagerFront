import LoginForm from '@/components/LoginForm/LoginForm'
import UserRegisterForm from '@/components/UserRegisterForm/UserRegisterForm'
import React from 'react'

const TopPage = () => {
  return (
  <div className="w-64 mx-auto">
    <h2 className="font-semibold text-2xl mb-4">新規登録</h2>
    <UserRegisterForm />
    <h2 className="font-semibold text-2xl mb-4">ログイン</h2>  
    <LoginForm />
  </div>
  )
}

export default TopPage