import UserRegisterForm from '@/components/UserRegisterForm/UserRegisterForm'
import React from 'react'

const TopPage = () => {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      
    <h2 className="font-semibold text-2xl mb-4">新規登録</h2>
    <UserRegisterForm />
    </main>
  )
}

export default TopPage