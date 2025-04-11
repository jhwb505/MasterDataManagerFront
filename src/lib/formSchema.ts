import {z} from "zod"

const userRegisterFormSchema = z.object({
  firstName: z.string().min(2,{message: "FirstNameは2文字以上で入力してください"}),
  lastName: z.string().min(2,{message:"LastNameは2文字以上で入力してください"}),
  emailAddress: z.string().email({message: "適切なメールアドレスを入力してください"}),
  password: z.string().min(8,{message:"パスワードは8文字以上で入力してください"}).max(16,{message:"パスワードは16文字以内で入力してください"})
})

export default userRegisterFormSchema