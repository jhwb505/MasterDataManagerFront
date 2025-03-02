'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  example: string,
  exampleRequired: string,
};


const ReactHookForm2 = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  // watch input value by passing the name of it
  // フォームのnameをwatchに渡すことによって、入力値を取得することができる。
  console.log(watch("example")) 
  const example = watch("example");

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    // handleSubmitを使用することにより、onSubmitが呼ばれる前に入力値を検証できます。
    <form onSubmit={handleSubmit(onSubmit)}>
      
      {/* 
      　register関数を呼び出すことによって、入力フォームをhookに登録する。
      　register関数の引数に、hookに登録する際のフォームの名前を指定する。
      */}
      <input {...register("example")}  className='border px-10 py-3 m-2 bg-slate-100'/>
      {example && <p>{example}</p>}
      
      <input {...register("exampleRequired", { required: true })} className='border px-10 py-3 m-2 bg-slate-100'/>

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" className='border px-10 py-3 m-2 bg-slate-100'/>

    </form>
  );
}

export default ReactHookForm2;