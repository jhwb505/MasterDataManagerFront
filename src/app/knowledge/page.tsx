'use client'

import Topic from "@/components/Topic";
import { Button } from "@heroui/react";
import Link from "next/link";

const KnowLedgePage = () => {
  return (

    <>
      <div className="flex gap-3 justify-center flex-wrap mt-4">
        <Topic topicName="TypeScript関連" path="/knowledge/typescript" description="TypeScriptの基本的な知識について"></Topic>
        <Topic topicName="HeroUI Form関連" path="/knowledge/herouiform/1" description="リアルタイムで状態を管理されていないフォームの使い方について"></Topic>
        <Topic topicName="HeroUI Form関連" path="/knowledge/herouiform/2" description="リアルタイムで状態を管理されているフォームの使い方について（stateを用いた状態管理の方法）"></Topic>
        <Topic topicName="React-Hook-Form関連" path="/knowledge/reacthookform/1" description="リアルタイムで状態を管理されているフォームの使い方について（react-hook-formを用いた状態管理の方法)"></Topic>
        <Topic topicName="React-Hook-Form関連" path="/knowledge/reacthookform/2" description="React Hook Formの基礎"></Topic>
      </div>
      <div className="relative min-h-screen">
        <Link href="/" className="fixed bottom-4 right-4 m-4">
          <Button color="primary" variant="shadow" radius="full">戻る</Button>
        </Link>
      </div>
    </>

  )
}

export default KnowLedgePage;