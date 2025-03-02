'use client';

import { Button, Divider, Form, Select, SelectItem } from '@heroui/react';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

// セレクトボックスのオプション
const animals = [
  { key: 'all', label: 'すべて' },
  { key: 'dog', label: 'Dog' },
  { key: 'cat', label: 'Cat' },
  { key: 'elephant', label: 'Elephant' },
  { key: 'lion', label: 'Lion' },
  { key: 'tiger', label: 'Tiger' }
];

type FormData = {
  [key: string] : FormDataEntryValue
}

const HeroUIForm1Page = () => {
  const { control, handleSubmit } = useForm<FormData>();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelectChange = (value: string[]) => {
    // "すべて"が選ばれた場合、それ以外をクリアして"すべて"のみ選択する
    if (value.includes('all')) {
      setSelectedValues(['all']);
    } else {
      setSelectedValues(value);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="mt-4 bg-sky-600 text-white pt-5 pb-5 text-2xl pl-5">
        リアルタイムで状態を管理されているフォームの例
      </h1>
      <p className="text-lg">
        HeroUIコンポーネントはデフォルトでは状態を管理されていませんので、リアルタイムで状態を管理する必要がある場合は、useStateフックを使用して、コンポーネントの状態管理を行う必要があります。<br />
        以下がリアルタイムで状態管理を行っているHeroUIコンポーネントの例です。ソースコードを確認して理解を深めましょう。
      </p>
      <Divider></Divider>

      <Form className="w-full max-w-xs" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="animals"
          render={({ field }) => (
            <Select
              selectionMode="multiple"
              variant="bordered"
              {...field}
              onChange={(e) => {
                const val = Array.from(e.target.value.split(','));
                handleSelectChange(val);
                field.onChange(val); // react-hook-formの状態更新
              }}
              value={selectedValues}
              selectedKeys={selectedValues}
              label="Choose items"
              placeholder="Select items"
            >
              {animals.map((animal) => (
                <SelectItem key={animal.key} >
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          )}
        />

        <Button type="submit" color="primary" variant="shadow" radius="full">
          Submit
        </Button>
      </Form>

      <div className="relative min-h-screen">
        <Button color="primary" variant="shadow" radius="full" className="fixed bottom-4 right-4 m-4">
          戻る
        </Button>
      </div>
    </>
  );
};

export default HeroUIForm1Page;
