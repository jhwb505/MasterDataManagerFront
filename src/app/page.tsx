'use client'

import LoginForm from '@/components/LoginForm/LoginForm'
import UserRegisterForm from '@/components/UserRegisterForm/UserRegisterForm'
import React, {useState} from 'react'

const TopPage = () => {
  const [activeTab, setActiveTab] = useState('ログイン');
  return (
  <div className="max-w-lg mx-auto mt-10 pt-3">
    {/* タブヘッダー */}
    <div className="flex border-gray-300">
        <button
          className={`w-full text-sm font-medium ${
            activeTab === "ログイン"
              ? 'text-black border-b-4 border-black transition-all duration-500 ease-in-out transform'
              : 'text-gray-400 border-b-4 hover:text-gray-600'
          }`}
          onClick={() => setActiveTab('ログイン')}
        >
          ログイン
        </button>
        <button
          className={`w-full text-sm font-medium ${
            activeTab === '会員登録'
              ? 'text-black border-b-4 border-black transition-all duration-500 ease-in-out transform'
              : 'text-gray-400 border-b-4 hover:text-gray-600'
          }`}
          onClick={() => setActiveTab('会員登録')}
        >
          会員登録
        </button>
    </div>

    {/* タブコンテンツ */}
    <div className="w-full mt-20 mx-auto">
    {activeTab == "会員登録" && <UserRegisterForm />}
    {activeTab == "ログイン" && <LoginForm />}
    </div>
  </div>
  )
}

export default TopPage