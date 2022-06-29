import React, { useState } from "react";
import $api from "../../constans/Api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  console.log(password);

  const handleSubmit = async () => {
    try {
      const res = $api.post("/authorisation.php", {
        login: email,
        password: password,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-100 flex justify-center">
      <div className="mx-36 w-full h-96 flex flex-col mt-8 items-center  rounded-3xl bg-white p-14">
        <span className="font-medium text-2xl text-sky-700">Авторизация</span>
        <span className="font-medium  text-sm mt-4">
          Введите логин и пароль{" "}
        </span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-6 border rounded-3xl h-10 p-2 bg-slate-50"
          placeholder="email"
          type="text"
          name=""
          id=""
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-6 border rounded-3xl h-10 p-2 bg-slate-50"
          placeholder="password"
          type="text"
          name=""
          id=""
        />
        <button
          onClick={() => handleSubmit()}
          className="mt-12 rounded-3xl py-2 px-12 text-white bg-sky-700"
        >
          Войти
        </button>
      </div>
    </div>
  );
};

export default Login;
