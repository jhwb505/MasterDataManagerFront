'use client'

import { Button, Divider, Form, Select, SelectItem } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';

export const animals = [
  { key: 'dog', label: 'Dog' },
  { key: 'cat', label: 'Cat' },
  { key: 'elephant', label: 'Elephant' },
  { key: 'lion', label: 'Lion' },
  { key: 'tiger', label: 'Tiger' }
];

type FormData = {
  [key: string]: FormDataEntryValue;
}

const HeroUIForm2 = () => {
  // リアルタイムで状態を管理したい値をstateで管理する
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  // Formでsubmitするデータを管理
  const [submitted, setSubmitted] = useState<FormData>();

  // onChangeイベントの中で、イベントの対象の値を取得し、ステートを更新することで、再レンダリングが行われるので、ほぼリアルタイムで状態を更新できる。
  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedValues(e.target.value.split(','));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);
  }

  return (
    <>
      <h1 className='mt-4 bg-sky-600 text-white pt-5 pb-5 text-2xl pl-5'>
        リアルタイムで状態を管理されているフォームの例
      </h1>
      <p className='text-lg'>
        HeroUIコンポーネントはデフォルトでは状態を管理されていませんので、リアルタイムで状態を管理する必要がある場合は、useStateフックを使用して、コンポーネントの状態管理を行う必要があります。<br />
        以下がリアルタイムで状態管理を行っているHeroUIコンポーネントの例です。<br></br>
        selectedに表示される値が、submitのタイミングとは別にリアルタイムで更新されているのがわかると思います。
      </p>
      <Divider></Divider>

      <Form className='w-full max-w-xs' onSubmit={onSubmit}>
        <Select
          selectionMode='single'
          variant='bordered'
          onChange={handleSelectChange}
          name="animal"
          label="Choose items"
          placeholder="Select items"
        >
          {animals.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
        <p className='text-small text-default-500'>
          Selected: {selectedValues.join(', ')}
        </p>
        <Button type='submit' className='w-1/3' color='primary'>
          Submit
        </Button>
      </Form>

      {submitted && (
        <div className='text-small text-default-500'>
          Submitted data: <p>{JSON.stringify(submitted,null,2)}</p>
        </div>
      )}

      <div className="relative min-h-screen">
        <Link href="/knowledge" className="fixed bottom-4 right-4 m-4">
          <Button color="primary" variant="shadow" radius="full">戻る</Button>
        </Link>
      </div>
    </>
  );
};

export default HeroUIForm2;
