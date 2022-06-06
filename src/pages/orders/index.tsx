import React from "react";
import { AiOutlineBook, AiOutlineUser } from "react-icons/ai";
import { useAppDispatch } from "../../store";
import { openOrderModal } from "../../store/ui/actions";

const AllOrders = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="mx-56 bg-white">
        <div className="w-full text-center">
          <span className="font-bold text-xl">Все заказы</span>
        </div>
        <div className="flex justify-between mx-36 mt-3">
          <div className="dropdown inline-block relative ml-2">
            <button className="rounded-3xl py-2 px-8 text-white bg-cyan-500 inline-flex items-center">
              <span className="mr-1">За год</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
              <li className="">
                <a
                  className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="/"
                >
                  One
                </a>
              </li>
              <li className="">
                <a
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="/"
                >
                  Two
                </a>
              </li>
              <li className="">
                <a
                  className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="/"
                >
                  Three is the magic number
                </a>
              </li>
            </ul>
          </div>
          <button className="rounded-3xl py-2 px-8 text-white bg-cyan-500">
            Выбор даты
          </button>
          <button className="rounded-3xl py-2 px-8 text-white bg-cyan-500">
            Новые заказы
          </button>
        </div>
        <div className="mx-16 my-3">
          <div className=" flex justify-between">
            <div className="w-60 p-2 flex items-center justify-start rounded-xl bg-lime-500">
              <div className="w-14 h-14 m-2 flex items-center justify-center bg-white rounded-full">
                <AiOutlineBook className="w-10 h-10" />
              </div>{" "}
              <div className="text-white">
                <span className="font-bold	text-base">2 001</span>
                <br />{" "}
                <span className="break-words text-sm font-normal">
                  Количество заказов
                </span>
              </div>
            </div>
            <div className="w-60 p-2 flex items-center justify-start rounded-xl bg-cyan-500">
              <div className="w-14 h-14 m-2 flex items-center justify-center bg-white rounded-full">
                <AiOutlineUser className="w-10 h-10" />
              </div>{" "}
              <div className="text-white">
                <span className="font-bold	text-base">551</span>
                <br />{" "}
                <span className="break-words text-sm font-normal">
                  Заказы от новых клиентов
                </span>
              </div>
            </div>
            <div className="w-60 p-2 flex items-center justify-start rounded-xl bg-violet-500">
              <div className="w-14 h-14 m-2 flex items-center justify-center bg-white rounded-full">
                <AiOutlineUser className="w-10 h-10" />
              </div>{" "}
              <div className="text-white">
                <span className="font-bold	text-base">617</span>
                <br />{" "}
                <span className="break-words text-sm font-normal">
                  Заказы тех кто уже делал заказ
                </span>
              </div>
            </div>
          </div>
          <div className="w-full text-center my-6">
            <span className="font-bold text-xl">Поиск</span>
          </div>
          <div className=" flex items-center justify-between">
            <input
              className="w-96 border rounded-3xl h-10 p-2 px-4 bg-slate-100"
              placeholder="Номер телефона"
              type="text"
              name=""
              id=""
            />
            <div className="dropdown inline-block relative">
              <button className="rounded-3xl py-2 px-8 text-white bg-cyan-500 inline-flex items-center">
                <span className="mr-1">По номеру телефона</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li className="">
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/"
                  >
                    One
                  </a>
                </li>
                <li className="">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/"
                  >
                    Two
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/"
                  >
                    Three is the magic number
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col justify-around mt-6">
            <div
              onClick={() =>
                dispatch(
                  openOrderModal({
                    data: null,
                    open: true,
                  })
                )
              }
              className="w-full px-4 py-3 flex items-center justify-between rounded-2xl bg-neutral-800 mt-3"
            >
              <div className="flex flex-col text-white">
                <span>Борисова Снежана</span>
                <span>7 495 755-69-83</span>
              </div>
              <div className="flex flex-col text-white">
                <span>Номер заказа: 3453</span>
                <span>Дата заказа: 24.04.2022 12:30</span>
                <span>Сумма заказа: 100 000 ₽</span>
              </div>
            </div>
            <div className="w-full px-4 py-3 flex items-center justify-between rounded-2xl bg-neutral-800 mt-3">
              <div className="flex flex-col text-white">
                <span>Борисова Снежана</span>
                <span>7 495 755-69-83</span>
              </div>
              <div className="flex flex-col text-white">
                <span>Номер заказа: 3453</span>
                <span>Дата заказа: 24.04.2022 12:30</span>
                <span>Сумма заказа: 100 000 ₽</span>
              </div>
            </div>{" "}
            <div className="w-full px-4 py-3 flex items-center justify-between rounded-2xl bg-neutral-800 mt-3">
              <div className="flex flex-col text-white">
                <span>Борисова Снежана</span>
                <span>7 495 755-69-83</span>
              </div>
              <div className="flex flex-col text-white">
                <span>Номер заказа: 3453</span>
                <span>Дата заказа: 24.04.2022 12:30</span>
                <span>Сумма заказа: 100 000 ₽</span>
              </div>
            </div>{" "}
            <div className="w-full px-4 py-3 flex items-center justify-between rounded-2xl bg-neutral-800 mt-3">
              <div className="flex flex-col text-white">
                <span>Борисова Снежана</span>
                <span>7 495 755-69-83</span>
              </div>
              <div className="flex flex-col text-white">
                <span>Номер заказа: 3453</span>
                <span>Дата заказа: 24.04.2022 12:30</span>
                <span>Сумма заказа: 100 000 ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
