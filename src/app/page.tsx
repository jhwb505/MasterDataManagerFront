import UserRegisterForm from '@/components/UserRegisterForm/UserRegisterForm'
import React from 'react'

const TopPage = () => {
  return (
  <>
    <h2 className="font-semibold text-2xl mb-4">新規登録</h2>
    <UserRegisterForm />
  </>
    
  )
}

export default TopPage