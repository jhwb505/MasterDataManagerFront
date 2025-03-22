import React from 'react'

const UserDetailBody = () => {
  return (
<div className="grid grid-cols-4 grid-rows-4 gap-2 w-full h-screen p-2">
  <div className="bg-blue-400 col-span-1 row-span-3 flex items-center justify-center">1×3</div>
  <div className="bg-green-400 col-span-3 row-span-3 flex items-center justify-center">3×3</div>
  <div className="bg-red-400 col-span-1 row-span-1 flex items-center justify-center">1×1</div>
  <div className="bg-yellow-400 col-span-3 row-span-1 flex items-center justify-center">1×3</div>
</div>

  )
}

export default UserDetailBody