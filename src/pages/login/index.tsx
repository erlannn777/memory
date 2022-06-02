import React from "react";

const Login = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="mx-36 w-full h-96 flex flex-col items-center  rounded-3xl bg-white p-14">
        <span className="font-medium text-2xl text-sky-700">Авторизация</span>
        <span className="font-medium  text-sm mt-4">
          Введите логин и пароль{" "}
        </span>
        <input
          className="mt-6 border rounded-3xl h-10 p-2 bg-slate-50"
          placeholder="email"
          type="text"
          name=""
          id=""
        />
        <input
          className="mt-6 border rounded-3xl h-10 p-2 bg-slate-50"
          placeholder="password"
          type="text"
          name=""
          id=""
        />
        <button className="mt-12 rounded-3xl py-2 px-12 text-white bg-sky-700">
          Войти
        </button>
      </div>
    </div>
  );
};

export default Login;
