'use client'

import DatabaseIcon from "@/components/svg/DatabaseIcon"
import FlowIcon from "@/components/svg/FlowIcon"
import Gear from "@/components/svg/Gear"
import HomeIcon from "@/components/svg/HomeIcom"

const Side = () => {

  return (
      <>
        <button className="relative left-2 top-10 inline-flex items-center justify-center p-3  rounded-full hover:bg-[#0e1f2f] hover:text-white transition-colors duration-200 cursor-pointer">
          <HomeIcon className="w-6 h-6" />
        </button>
        <button className="relative left-2 top-11 inline-flex items-center justify-center p-3  rounded-full hover:bg-[#0e1f2f] hover:text-white transition-colors duration-200 cursor-pointer">
          <DatabaseIcon className="w-6 h-6" />
        </button>
        <button className="relative left-2 top-12 inline-flex items-center justify-center p-3  rounded-full hover:bg-[#0e1f2f] hover:text-white transition-colors duration-200 cursor-pointer">
          <FlowIcon className="w-6 h-6" />
        </button>
        <button className="absolute left-2 bottom-4 inline-flex items-center justify-center p-3  rounded-full hover:bg-[#0e1f2f] hover:text-white transition-colors duration-200 cursor-pointer">
          <Gear className="w-6 h-6" />
        </button>
      </>
  )
}

export default Side