import React from "react";

const Services = () => {
  return (
    <div className="">
      <div className="flex flex-col mx-36 px-8 bg-white min-h-screen mt-4">
        <div className="text-center ">
          <span className="font-bold text-xl">Редактирование</span>
        </div>
        <div className="mt-6 mx-8 border rounded-3xl  p-3 pl-6 bg-slate-300  font-normal text-slate-800 text-sm">
          Услуги Ритуальные услуги
        </div>
        <div className="flex wrap mt-8">
          <div className="w-44 h-36 m-2 p-2 flex justify-center items-center text-center shadow-xl rounded-2xl break-words font-medium text-sm">
            Ритуальные услуги
          </div>
          <div className="w-44 h-36 m-2 p-2 flex justify-center items-center text-center shadow-xl rounded-2xl break-words font-medium text-sm">
            Уход за могилами
          </div>
          <div className="w-44 h-36 m-2 p-2 flex justify-center items-center text-center shadow-xl rounded-2xl break-words font-medium text-sm">
            Поиск мест захронений
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
