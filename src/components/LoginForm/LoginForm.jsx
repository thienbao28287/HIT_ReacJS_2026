import React from "react";

export const LoginForm = () => {
  const loginSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Email không được để trống!" })
      .email({ message: "Vui lòng nhập đúng định dạng email!" }),
    password: z
      .string()
      .min(8, { message: "Mật khẩu phải chứa ít nhất 8 ký tự!" }),
  });
  return <div>LoginForm</div>;
};
