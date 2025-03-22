'use client'

import React from "react";
import {Button} from "@heroui/react";
import Link from "next/link";

export default function App() {
  return (
    <>
    <div className="relative min-h-screen">
      <Link href="/knowledge" className="fixed bottom-12 right-4 m-4">
        <Button color="primary" variant="shadow" radius="full">学ぶ</Button>
      </Link>
      <Link href="user" className="fixed bottom-1 right-4 m-4">
        <Button color="primary" variant="shadow" radius="full">ユーザー管理</Button>
      </Link>
    </div>
    </>
  );
}