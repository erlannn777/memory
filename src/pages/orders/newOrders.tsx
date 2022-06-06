import React from "react";

const NewOrders = () => {
  return (
    <div>
      <div className="mx-56 bg-white">
        <div className="w-full text-center">
          <span className="font-bold text-xl">Новые заказы</span>
        </div>
        <div className="w-full text-start">
          <span className="font-bold text-xl">Сегодня:</span>
        </div>
        <div className="w-full flex flex-col justify-berween ">
          <div className="w-full flex  justify-between mt-4">
            <div className="px-4 w-3/4 py-3 flex items-center justify-between rounded-2xl bg-orange-400">
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
            <div className="w-32 flex items-center justify-center text-center rounded-2xl bg-orange-400">
              <span className="font-bold text-xl text-white">ЧАТ</span>
            </div>
          </div>
          <div className="w-full flex  justify-between mt-4">
            <div className="px-4 w-3/4 py-3 flex items-center justify-between rounded-2xl bg-orange-400">
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
            <div className="w-32 flex items-center justify-center text-center rounded-2xl bg-orange-400">
              <span className="font-bold text-xl text-white">ЧАТ</span>
            </div>
          </div>
          <div className="w-full flex  justify-between mt-4">
            <div className="px-4 w-3/4 py-3 flex items-center justify-between rounded-2xl bg-orange-400">
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
            <div className="w-32 flex items-center justify-center text-center rounded-2xl bg-orange-400">
              <span className="font-bold text-xl text-white">ЧАТ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrders;
