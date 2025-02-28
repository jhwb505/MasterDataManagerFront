'use client'

import React from "react";
import {Button} from "@heroui/react";
import Link from "next/link";

export default function App() {
  return (
    <>
    <div className="relative min-h-screen">
      <Link href="/knowledge" className="fixed bottom-4 right-4 m-4">
        <Button color="primary" variant="shadow" radius="full">学ぶ</Button>
      </Link>
    </div>
    </>
  );
}