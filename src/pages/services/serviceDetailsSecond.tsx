import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useAppDispatch } from "../../store";
import {
  openCreateServiceModal,
  openEditServiceModal,
} from "../../store/ui/actions";

const ServiceDetailsSecond = () => {
  const dispatch = useAppDispatch();
  return (
    <div className=" flex justify-center">
      <div className="flex flex-col w-11/12 px-8 bg-white min-h-screen mt-4">
        <div className="text-center ">
          <span className="font-bold text-xl">Редактирование</span>
        </div>
        <div className="mt-6 mx-8 border rounded-3xl  p-3 pl-6 bg-slate-300  font-normal text-slate-800 text-sm">
          Услуги Ритуальные услуги
        </div>
        <div className="flex wrap mt-8">
          <div className="w-44 h-72 m-2  flex flex-col justify-start items-start shadow-xl rounded-2xl ">
            <div className="rounded-t-2xl w-full h-52 relative">
              <div className="absolute w-10 h-10 left-32 top-2 flex items-center justify-center bg-cyan-500 rounded-full">
                <BiEdit
                  onClick={() =>
                    dispatch(
                      openEditServiceModal({
                        data: null,
                        open: true,
                      })
                    )
                  }
                  className="h-6 w-6"
                />
              </div>
              <img
                className="rounded-t-2xl w-full h-52"
                src="http://luk-media.ru/blog/nemcov/panihida/DSC06084.jpg"
                alt=""
              />
            </div>
            <div className="w-full h-full  text-start p-3">
              <span className="break-words font-medium text-sm">Груз 200</span>
            </div>
          </div>
          <div className="w-44 h-32 p-3 m-2 rounded-2xl bg-cyan-500 flex flex-col items-center text-center shadow-xl">
            <AiOutlinePlus
              onClick={() =>
                dispatch(
                  openCreateServiceModal({
                    data: null,
                    open: true,
                  })
                )
              }
              className="w-12 h-12 mt-2"
            />
            <span className="mt-2 break-words font-medium text-sm">
              Добавить услугу
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsSecond;
