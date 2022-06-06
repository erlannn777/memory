import React, { useState } from "react";
import Modal from "./Modal";

const Users = () => {
  const [modalAvtive, setModalActive] = useState(false);
  const css = `
        .activeMyModal{
            display: block;
            position: relative;
        }
        .hcard{
            transition: 1s;
        }
        .hcard:hover{
            background-color: rgb(56 189 248) !important;
        }
    `;
  return (
    <div className="w-full my-3">
      <h1 className="text-center font-bold text-xl">Пользователи приложения</h1>
      <div className="mx-auto text-center mt-16 mb-8">
        <button
          className="py-5 px-16 text-gray-800 bg-gray-100 rounded-3xl border-2 border-gray-300 mx-auto"
          style={{ borderRadius: "2rem" }}
        >
          Введите город
        </button>
      </div>
      <div className="grid grid-cols-6 gap-x-4 text-center w-96 mx-auto my-auto">
        <button
          className="bg-gray-700 col-span-2 border px-8 py-2 font-bold text-white"
          style={{ borderRadius: "2rem" }}
        >
          Все
        </button>
        <button
          className="bg-gray-200 border col-span-4 px-8 py-2 font-bold"
          style={{ borderRadius: "2rem" }}
        >
          Добавлены могилки
        </button>
      </div>
      <div style={{ width: "50vw" }} className="mx-auto my-auto mt-8">
        <form
          action=""
          className="grid grid-cols-4 gap-4"
          name="adminSearch"
          method="POST"
        >
          <input
            type="phone"
            placeholder="Номер телефона"
            className="text-xl bg-gray-100 border-2 border-gray-300 py-1 px-6 col-span-3"
            style={{ borderRadius: "2rem" }}
          />
          <div className="col-span-1">
            <button
              className="bg-sky-400 border rounded-3xl py-2 px-14 w-full text-white"
              type="submit"
              style={{ borderRadius: "2rem" }}
            >
              Показать
            </button>
            <p className="text-center text-ls">30 найдено</p>
          </div>
        </form>
        <div>
          <div className="grid grid-cols-4 grid-rows-2">
            <p className="text-right">3</p>
            <p className="text-right col-span-2">400</p>
            <form
              action=""
              name="ordersCount"
              method="POST"
              className="grid grid-cols-4 col-span-4"
            >
              <label htmlFor="valueOfOreders" className="col-span-1">
                Количетсво заказов
              </label>
              <input
                id="slider-snap"
                type="range"
                step="1"
                min="3"
                max="400"
                name="oredersValue"
                className="col-span-2"
              />
            </form>
          </div>
        </div>
        <div>
          <div className="grid gap-4 mt-6">
            <div
              className="w-full bg-gray-900 text-white pl-4 py-4 grid grid-cols-10 hcard"
              style={{ borderRadius: "2rem", backgroundColor: "#404040" }}
            >
              <div className="col-span-3 text-xl h-full grid grid-rows-2">
                <b>Борисова Снежана</b>
                <p>+7 999 999 99 99</p>
              </div>
              <div className="col-span-4"></div>
              <div className="col-span-3">
                <div className="grid grid-cols-3">
                  <p className="col-span-2">Количетсво заказов:</p>
                  <b className="col-span-1 text-left text-l">40</b>
                </div>
                <div>
                  <p>Дата последнего заказа: 12.02.2022</p>
                </div>
                <div>
                  <p>Город: Москва</p>
                </div>
              </div>
            </div>
            <div
              className="w-full bg-gray-900 text-white pl-4 py-4 grid grid-cols-10 hcard"
              style={{ borderRadius: "2rem", backgroundColor: "#404040" }}
            >
              <div className="col-span-3 text-xl h-full grid grid-rows-2">
                <b>Борисова Снежана</b>
                <p>+7 999 999 99 99</p>
              </div>
              <div className="col-span-4"></div>
              <div className="col-span-3">
                <div className="grid grid-cols-3">
                  <p className="col-span-2">Количетсво заказов:</p>
                  <b className="col-span-1 text-left text-l">40</b>
                </div>
                <div>
                  <p>Дата последнего заказа: 12.02.2022</p>
                </div>
                <div>
                  <p>Город: Москва</p>
                </div>
              </div>
            </div>
            <div
              className="w-full  text-white pl-4 py-4 grid grid-cols-10 hcard"
              style={{ borderRadius: "2rem", backgroundColor: "#404040" }}
            >
              <div className="col-span-3 text-xl h-full grid grid-rows-2">
                <b>Борисова Снежана</b>
                <p>+7 999 999 99 99</p>
              </div>
              <div className="col-span-4"></div>
              <div className="col-span-3">
                <div className="grid grid-cols-3">
                  <p className="col-span-2">Количетсво заказов:</p>
                  <b className="col-span-1 text-left text-l">40</b>
                </div>
                <div>
                  <p>Дата последнего заказа: 12.02.2022</p>
                </div>
                <div>
                  <p>Город: Москва</p>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly mt-24 mb-48">
              <button
                className="py-2 cursor-pointer px-8 text-m text-white"
                style={{ borderRadius: "2rem", backgroundColor: "#404040" }}
              >
                Отменить выделение
              </button>
              <button
                className="py-2 cursor-pointer px-8 text-m text-white bg-sky-400"
                style={{ borderRadius: "2rem" }}
              >
                Выделить все
              </button>
              <button
                onClick={() => setModalActive(true)}
                className="py-2 cursor-pointer px-8 text-m text-white bg-sky-400"
                style={{ borderRadius: "2rem" }}
              >
                Открыть Push уведомления
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal active={modalAvtive} setActive={setModalActive}>
        <div className="text-center w-full mx-16 my-4">
          <h2 className="text-3xl font-bold">Push-уведомления</h2>
          <b
            className="cursor-pointer closeModal"
            onClick={() => setModalActive(false)}
          >
            ✖
          </b>
          <form action="" name="push" method="POST" className="mt-16">
            <input
              type="text"
              className="block w-full py-3 px-4"
              style={{ borderRadius: "2rem", backgroundColor: "#F4F4F4" }}
              placeholder="Заголовок"
            />
            <textarea
              name=""
              id=""
              className="block w-full py-3 px-4 rounded-lg mt-4 h-52 mb-20"
              style={{ backgroundColor: "#F4F4F4" }}
              placeholder="Текст сообщения..."
            ></textarea>
            <button
              type="submit"
              className="bg-sky-400 text-white font-bold px-12 py-2"
              style={{ borderRadius: "2rem" }}
            >
              Отпрвить Push-уведомление
            </button>
          </form>
        </div>
      </Modal>

      <style>{css}</style>
    </div>
  );
};

export default Users;
