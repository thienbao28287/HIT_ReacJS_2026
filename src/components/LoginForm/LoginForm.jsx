import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Email không được để trống!")
    .email("Email không đúng định dạng!"),
  password: z
    .string()
    .nonempty("Mật khẩu không được để trống!")
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự!"),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Đăng nhập thành công!");
  };

  return (
    <div className="login-container">
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="email"
            placeholder="Nhập email"
            className="login-input"
            {...register("email")}
          />
          {errors.email && <p className="error-text">{errors.email.message}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            className="login-input"
            {...register("password")}
          />
          {errors.password && (
            <p className="error-text">{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className="login-button">
          Đăng nhập
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
