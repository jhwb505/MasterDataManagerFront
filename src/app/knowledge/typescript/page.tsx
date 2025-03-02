'use client'
import { Button, Code, Divider, Link } from '@heroui/react';
import React from 'react'

const TypeScriptPage = () => {
  return (
      <div className="flex flex-col gap-4 max-w-screen-xl ml-5">

        <h1 className='mt-4 bg-sky-600 text-white pt-5 pb-5 text-2xl'>{`1. 型の初歩（癖があるのだけまとめてます）`}</h1>
        <p  className='text-lg'>型とは、値とそれを使ってできる事柄の集まりです。</p>

        <Divider></Divider>
        <h2 className='text-xl mt-1 bg-sky-100 text-slate-800 pt-2 pb-2'>{`1.1. any`}</h2>
        <p className='text-lg'>
          anyは型のゴットファーザーであるため、報酬のためにはなんでもしますが、選択の余地が全くない場合を除けば、anyに頼み事をしたくはありません。TypeScriptでは、コンパイル時に全てのものが型を持っている必要があります。
          <br />
          あるものの型がなんなのか、あなたやTypeScriptがわからない場合のデフォルトの型がanyです。これは最終手段の型であり、できるだけ避けるべきです。
          <br></br>
          なぜ、避けるべきなのか、、それは型とは値とそれを使ってできる事柄の集まりであるため、anyは全ての値の集まりであり、anyを使えばなんでもできてしまうからです。
          </p>
        <Code size="md">
          let a: any = 666;<br />
          let b: any = {`['danger']`};
        </Code>
      
        <Divider></Divider>
        <h2 className='text-xl mt-1 bg-sky-100 text-slate-800 pt-2 pb-2'>{`1.2. unknown`}</h2>
        <p className='text-lg'>
          unknown型はanyと同様に、任意の値を表す型ですが、それが何であるかを絞り込むまでは、TypeScriptはunknown型の値の使用を許可しません。
          <br />
          なので、どうしても型がわからない値がある場合は、anyではなくunknown型を使用してください。
          <br></br>
          絞り込むとは、typeofやinstanceofを使用して、型を明確にするという意味です。
        </p>
        <Code size="md">
          let a: unknown = 30;<br />
          let b = a+10 // エラー TS2571: オブジェクトの型はunknownです。;<br></br>
          {`if(typeof a === 'number'){
            let d = a + 10; 
          } // typeofで型の絞り込みを行うと使えるようになる。`}
        </Code>

        <Divider></Divider>
        <h2 className='text-xl mt-1 bg-sky-100 text-slate-800 pt-2 pb-2'>{`1.3. boolean`}</h2>
        <p className='text-lg'>
            boolean型は、trueとfalseの2つの値があるのと、それらを比較したり（==、===、||、&&、?を使用）、否定したり（！を使用）することができます。
            それ以外のことはあまりできません。
        </p>
        <Code size="md">
          let a = true;<br />
          let b = false;<br />
          const c = true;<br />
          let d: boolean = true;<br />
          let e: true = true; // これはリテラル型と言って、指定したリテラル以外を受け付けないようにする書き方ができる。<br /> 
          let f: true = false; // エラー TS2322: 型 falseを型trueに割り当てることはできません。<br /> 
        </Code>

        <Divider></Divider>
        <h2 className='text-xl mt-1 bg-sky-100 text-slate-800 pt-2 pb-2'>{`1.4. オブジェクト`}</h2>
        <p className='text-lg'>
            TypeScriptのオブジェクト型は、オブジェクトの形状を指定します。<br />
            Javaのようにクラスに名前をつけるような名前的型付けではなく、<br></br>
            あるオブジェクトが、特定のプロパティを持つことだけを重視する、構造的型付けを行います。
        </p>
        <Code size="md">
          {`let a: {
            b: number
            c?: string
            [key: number]: boolean
          }`}
        </Code>
        <p className='text-lg'>
            aはnumberであるプロパティbを持っています。<br />
            aはstringであるプロパティcを持つ可能性があります。cを設定する場合、cはundefinedでも構いません。<br />
            aはbooleanである数値プロパティを任意の数だけ持つことができます。<br />
            [key: T]: U という構文は、インデックスシグネチャと呼ばれ、こう書くことで、オブジェクトが型Tで指定した型のキー（プロパティ）を持つ、型Uの値を任意の数持てるようになる。ただし型Tはstringかnumberでなければいけない。<br />
            どのような型のオブジェクトをaに割り当てることができるか、見てみましょう。
        </p>
        <Code size="md">
          {`a = {b: 1};`}<br /> 
          {`a = {b: 1, c: undefined};`}<br /> 
          {`a = {b: 1, c: 'd'};`}<br /> 
          {`a = {b: 1, 10: true};`}<br /> 
          {`a = {b: 1, 10: true, 20: false};`}<br /> 
          {`a = {10: true; // プロパティbがないのでエラーになる`}<br /> 
          {`a = {b: 1, 20: 'red'}; // boolean出ないといけないプロパティにstringを入れようとしているので、エラー`}<br /> 
        </Code>

        <Divider></Divider>
        <h2 className='text-xl mt-1 bg-sky-100 text-slate-800 pt-2 pb-2'>{`1.5. Type alias(型エイリアス)`}</h2>
        <p className='text-lg'>
          変数宣言を使って、ある値の別名（エイリアス）となる変数を宣言できるのと同様に、ある型を指し示す、型エイリアスを宣言することができます。
          例えば、以下のようなものです。
        </p>
        <Code size="md">
          type Age = number<br />
          {`type Person = {
            name: string;
            age: Age;
          }`}<br />
        </Code>

        <Divider></Divider>
        <h2 className='text-xl mt-1 bg-sky-100 text-slate-800 pt-2 pb-2'>{`1.6. null、undefined、void、never`}</h2>
        <p className='text-lg'>
          nullは値が欠如していることを意味する。<br />
          undefinedは、あるものがまだ定義されていないことを意味する。<br />
        </p>
        <Code size="md">
        </Code>


        <div className="relative min-h-screen">
        <Link href="/knowledge" className="fixed bottom-4 right-4 m-4">
          <Button color="primary" variant="shadow" radius="full">戻る</Button>
        </Link>
      </div>
      </div>
  )
}

export default TypeScriptPage;