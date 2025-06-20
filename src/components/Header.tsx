'use client'

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react"
import MDMLogo from "./svg/MDMLogo"


const Header = () => {
  return (
    <div>
    <Navbar maxWidth="full" height="3rem" shouldHideOnScroll>
      <NavbarBrand className="flex gap-2 justify-start font-black">
        <MDMLogo />
        <h2>Master Data Manager</h2>
        </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="flex flex-row gap-2">
          <Button size="sm" radius="full" className="bg-[#0e1f2f] text-sm text-white">
            Log Out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    <div className="absolute bottom-0 left-[4rem] right-0 h-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"></div>
    </div>
  )
}

export default Header