import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, TextArea } from "@/components/common/inputs";
import { SubmitButton } from "../buttons";

interface FormData {
 name: string;
 email: string;
 title: string;
 body: string;
}

export default function ContactForm({
 setSuccess,
}: {
 setSuccess: (success: boolean) => void;
}) {
 const {
  register,
  handleSubmit,
  formState: { errors },
  control,
 } = useForm<FormData>();
 const [serverState, setServerState] = useState<{
  submitting: boolean;
  status: string | null;
 }>({
  submitting: false,
  status: null,
 });

 const handleOnSubmit = async (data: FormData) => {
  // フォームのバリデーションエラーがあるかどうかをチェック
  if (Object.keys(errors).length > 0) {
   console.log("フォームにエラーがあります:", errors);
   return;
  }
  setServerState({ submitting: true, status: null });
  console.log(data);
  try {
   const res = await fetch(
    `${process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL}`,
    {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(data),
    }
   );
   const json = await res.json();

   setServerState({ submitting: false, status: json.message });
   if (json.ok) {
    setSuccess(true);
   }
  } catch (err) {
   setServerState({ submitting: false, status: "送信に失敗しました。" });
  }
 };

 return (
  (<form onSubmit={handleSubmit(handleOnSubmit)}>
   <div className="flex flex-col gap-4">
    <Controller
     name="name"
     control={control}
     rules={{ required: "お名前を入力してください。" }}
     render={({ field }) => (
      <div>
       <Input
        {...field}
        isError={errors.name != undefined}
        placeholder="お名前"
       />
       {errors.name && (
        <p className="text-red text-sm">{errors.name.message}</p>
       )}
      </div>
     )}
    />
    <Controller
     name="email"
     control={control}
     rules={{
      required: "メールアドレスを入力してください。",
      pattern: {
       value: /^\S+@\S+$/i,
       message: "有効なメールアドレスを入力してください。",
      },
     }}
     render={({ field }) => (
      <div>
       <Input
        {...field}
        isError={errors.email != undefined}
        placeholder="メールアドレス"
       />
       {errors.email && (
        <p className="text-red text-sm">{errors.email.message}</p>
       )}
      </div>
     )}
    />
    <Controller
     name="title"
     control={control}
     rules={{ required: "タイトルを入力してください。" }}
     render={({ field }) => (
      <div>
       <Input
        {...field}
        isError={errors.title != undefined}
        placeholder="タイトル"
       />
       {errors.title && (
        <p className="text-red text-sm">{errors.title.message}</p>
       )}
      </div>
     )}
    />

    <Controller
     name="body"
     control={control}
     rules={{ required: "本文を入力してください。" }}
     render={({ field }) => (
      <div>
       <TextArea
        {...field}
        isError={errors.body != undefined}
        placeholder="本文"
        rows={8}
        cols={50}
       />
       {errors.body && (
        <p className="text-red text-sm">{errors.body.message}</p>
       )}
      </div>
     )}
    />
    <SubmitButton {...serverState} />
   </div>
  </form>)
 );
}
