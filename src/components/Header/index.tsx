import React from "react";
import {
  AiOutlineSearch,
  AiOutlineBarChart,
  AiOutlineShop,
  AiOutlineTeam,
  AiOutlineMessage,
  AiOutlineQuestionCircle,
} from "react-icons/ai";

const Header = () => {
  return (
    <div className="">
      <div className=" mx-36 bg-white">
        <div className="pt-6 mx-8 flex justify-between items-center">
          <span className="font-semibold text-sm">MemoriesManager</span>
          <button className="rounded-3xl py-2 px-8 text-white bg-sky-700">
            Выход
          </button>
        </div>
        <div className="flex justify-end items-center">
          <div className="flex items-center justify-around m-3">
            <AiOutlineSearch />
            <span className="ml-1 font-normal text-slate-500 text-sm">
              Заказы
            </span>
          </div>

          <div className="flex items-center justify-around m-3">
            <AiOutlineBarChart />
            <span className="ml-1 font-normal text-slate-500 text-sm">
              Статистика
            </span>
          </div>
          <div className="flex items-center justify-around m-3">
            <AiOutlineShop />
            <span className="ml-1 font-normal text-slate-500 text-sm">
              Товары и услуги
            </span>
          </div>
          <div className="flex items-center justify-around m-3">
            <AiOutlineTeam />
            <span className="ml-1 font-normal text-slate-500 text-sm">
              Пользователи
            </span>
          </div>
          <div className="flex items-center justify-around m-3">
            <AiOutlineMessage />
            <span className="ml-1 font-normal text-slate-500 text-sm">Чат</span>
          </div>
          <div className="flex items-center justify-around m-3">
            <AiOutlineQuestionCircle />
            <span className="ml-1 font-normal text-slate-500 text-sm">
              Вопрос-ответ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
