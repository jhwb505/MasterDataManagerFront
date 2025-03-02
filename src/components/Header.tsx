'use client'

import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react"


const Header = () => {
  return (
    <Navbar maxWidth="full" height="3rem" isBordered shouldHideOnScroll>
      <NavbarBrand>MDMシステム</NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="#" variant="light" size="sm">
            ログアウト
          </Button>
        </NavbarItem>
      </NavbarContent>

    </Navbar>
  )
}

export default Header