"use client";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

import { Input, TextArea } from "@/components/common/inputs";
import { SubmitButton } from "../buttons";

export default function ContactForm() {
 const {
  register,
  handleSubmit,
  formState: { errors },
  control,
 } = useForm();
 const [serverState, setServerState] = useState({
  submitting: false,
  status: null,
 });

 const handleOnSubmit = async (data) => {
  console.log(data);

  try {
   const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
   });

   if (response.ok) {
    // 成功時の処理
    setServerState({ submitting: false, status: "Success" });
   } else {
    // エラー時の処理
    setServerState({ submitting: false, status: "Error" });
   }
  } catch (error) {
   // エラーハンドリング
   console.error("エラーが発生しました:", error);
   setServerState({ submitting: false, status: "Error" });
  }
 };

 return (
  <form onSubmit={handleSubmit(handleOnSubmit)}>
   <div className="flex flex-col gap-4">
    <Controller
     name="name"
     control={control}
     render={({ field }) => (
      <Input {...field} type="text" placeholder="お名前" />
     )}
    />
    <Controller
     name="email"
     control={control}
     render={({ field }) => (
      <Input {...field} type="email" placeholder="メールアドレス" />
     )}
    />
    <Controller
     name="title"
     control={control}
     render={({ field }) => (
      <Input {...field} type="text" placeholder="タイトル" />
     )}
    />

    <Controller
     name="body"
     control={control}
     render={({ field }) => (
      <TextArea
       {...field}
       placeholder="本文"
       rows={12} // 必要に応じて行数を調整
       cols={50} // 必要に応じて列数を調整
      />
     )}
    />
    <SubmitButton />
   </div>
  </form>
 );
}
