'use client'

import React from "react";
import {Form, Input, Select, SelectItem, Button} from "@heroui/react";
import Link from "next/link";


type Errors = {
  password?: string;
  name?: string;
  email?: string;
  terms?: string;
}

/**
 * インデックス型 (Index Signature)
 * インデックス型は、オブジェクトがどのようなキーと値のペアを持つかを定義するためのものです。
 * k はプロパティ名のプレースホルダーです。
 * k は任意の文字列として扱われ、オブジェクトのキー名に対応します。
 * string はそのキーが 文字列型 であることを意味します。つまり、k は文字列型の任意の値であり、k にあたるキーがオブジェクト内で使用されます。
 * FormDataEntryValue の型は、string または File です。
 * これはフォームフィールドの値が文字列（例えばテキスト入力）やファイル（ファイルアップロード）のいずれかであることを示しています。
 * キーは動的で、何個でも追加できます。
 * const formData: FormData = {
  　name: "John Doe",   // string 型
  　email: "john@example.com",  // string 型
  　profilePicture: new File([""], "profile.jpg"),  // File 型
  　country: "Japan", // string 型
  　age: "30",  // string 型
　　};
 */
type FormData = {
  [k: string]: FormDataEntryValue;
}

export default function HeroUIForm1() {
  const [submitted, setSubmitted] = React.useState<FormData>({});
  const [errors, setErrors] = React.useState<Errors>({});

/**
 * 
 * @param e ブラウザのフォーム送信イベントから自動的に渡される、フォームの送信イベントオブジェクト
 * 　　　　　 React.FormEvent<HTMLFormElement> を使うことで、イベントオブジェクト e が HTMLFormElement に関連するものであると
 *          型安全に扱うことができます。
 *          これにより、TypeScriptがフォーム関連のプロパティ（例えば e.target や e.currentTarget）にアクセスできるようになります。
 * @returns 
 */
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    
    //ブラウザのデフォルトの挙動を抑える 
    e.preventDefault();

    // FormData は、フォーム内の入力フィールドのデータを簡単に取得するためのAPIです。
    // e.currentTarget は、onSubmit イベントが発生したフォーム要素を指します（この場合は <form>）
    // new FormData(e.currentTarget) は、指定されたフォーム (e.currentTarget) のすべてのフィールド（input、select など）からデータを収集して、FormData オブジェクトを作成します。
    //FormData は、フォームの各要素の名前（name 属性）と、それに対応する値を保持します。例えば、次のようなフォームがあったとします。
    // <form>
    //   <input name="username" value="john_doe" />
    //   <input name="email" value="john@example.com" />
    // </form>
    // new FormData(formElement) を実行すると、
    // FormData オブジェクトには username と email というキーと、それぞれの入力値（john_doe と john@example.com）が含まれます。
    // Object.fromEntries() は、Map オブジェクトや配列のエントリを受け取って、それを普通のオブジェクトに変換するメソッドです。
    // FormData オブジェクトは、実際には Map オブジェクトのように振る舞い、キーと値のペア（フォームの各 name 属性とその値）を格納しています。
    // Object.fromEntries はこの Map またはエントリの配列をオブジェクトに変換します。
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Custom validation checks
    const newErrors:Errors = {};

    // Username validation
    if (data.name === "admin") {
      newErrors.name = "Nice try! Choose a different username";
    }

    // Object.keys は、オブジェクトのキーを配列として取得するための JavaScript のメソッドです。
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and submit
    setErrors({});
    setSubmitted(data);
  };

  return (
    <>
    <h1 className='mt-4 bg-sky-600 text-white pt-5 pb-5 text-2xl pl-5'>リアルタイムで状態を管理されていないフォームの例</h1>
    <Form
      className="w-full justify-center items-center space-y-4 mt-5"
      validationErrors={errors}
      onReset={() => setSubmitted({})}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-4 max-w-md">
        
        {/* 全てのHeroUIコンポーネントは、labelコンポーネントとdescriptionコンポーネントをサポートしている */}
        <Input
          label="Name"
          description="ここは名前を入力するフィールドです。"
          name="name"
          placeholder="Enter your name"
          isRequired
          errorMessage={({validationDetails}) => {
            if (validationDetails.valueMissing) {
              return "Please enter your name";
            }
            return errors.name;
          }}
        />

        <Select
          isRequired
          label="Country"
          name="country"
          placeholder="Select country"
        >
          <SelectItem key="ar">Argentina</SelectItem>
          <SelectItem key="us">United States</SelectItem>
          <SelectItem key="ca">Canada</SelectItem>
          <SelectItem key="uk">United Kingdom</SelectItem>
          <SelectItem key="au">Australia</SelectItem>
          <SelectItem key="ja">Japan</SelectItem>
        </Select>

        <div className="flex gap-4">
          <Button className="w-full" color="primary" type="submit">
            Submit
          </Button>
          <Button type="reset" variant="bordered">
            Reset
          </Button>
        </div>
      </div>

      {submitted && (
        <div className="text-small text-default-500 mt-4">
          {/* JSON.stringify(data, null, 2) は、JavaScriptのオブジェクトや配列をJSON形式の文字列に変換するメソッドです。 */}
          {/* APIにデータを送信する際やローカルストレージに保存する際、オブジェクトや配列を文字列として扱う必要があります。その際に JSON.stringify() を使ってオブジェクトを文字列に変換します。 */}
          Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </Form>

  <div className="relative min-h-screen">
  <Link href="/knowledge" className="fixed bottom-4 right-4 m-4">
    <Button color="primary" variant="shadow" radius="full">戻る</Button>
  </Link>
  </div>
</>
  );
}

