import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useAppDispatch } from "../../store";
import { closeEditServiceModal } from "../../store/ui/actions";
import { useEditServiceModal } from "../../store/ui/hooks";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

const EditServiceModal = () => {
  const dispatch = useAppDispatch();
  const editService = useEditServiceModal();
  return (
    <Transition.Root show={editService.open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-20 inset-0 overflow-y-auto"
        onClose={() => dispatch(closeEditServiceModal())}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed z-10 inset-0 bg-white bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0 transform scale-95"
            enterTo="opacity-100 transform scale-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100 transform scale-100"
            leaveTo="opacity-0 transform scale-95 "
          >
            <div className="relative z-30 lg:w-2/4 dark:bg-black inline-block align-center align-middle rounded-xl bg-white border-2 border-gray  text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl">
              <div
                className="absolute h-6 w-6 top-0 right-0 fill-black m-4 hover:cursor-pointer"
                onClick={() => dispatch(closeEditServiceModal())}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    color="black dark:white"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <div className="m-6 flex flex-col items-center">
                <div>
                  <span className="font-bold text-xl">
                    Редактирование услуги
                  </span>
                </div>
                <div className="flex justify-between mt-6  w-full">
                  <div className="w-80 h-56 flex flex-col items-center justify-center bg-slate-300 rounded-2xl">
                    <img
                      className="object-cover rounded-2xl w-80 h-56"
                      src="http://luk-media.ru/blog/nemcov/panihida/DSC06084.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col items-center justify-between p-2">
                    <input
                      className=" border rounded-3xl h-10 p-2 bg-slate-50"
                      placeholder="Название"
                      type="text"
                      name=""
                      id=""
                    />
                    <input
                      className=" border rounded-3xl h-10 p-2 bg-slate-50"
                      placeholder="Цена"
                      type="text"
                      name=""
                      id=""
                    />
                    <input
                      className=" border rounded-3xl h-10 p-2 bg-slate-50"
                      placeholder="Адрес"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="w-full mt-6">
                  <div className="w-44 h-32 p-3 rounded-2xl bg-cyan-500 flex flex-col items-center text-center shadow-xl">
                    <AiOutlinePlus className="w-12 h-12 mt-2" />
                    <span className="mt-2 break-words font-medium text-sm">
                      Добавить услугу
                    </span>
                  </div>
                </div>
                <textarea
                  placeholder="Описание"
                  className="w-full h-96 bg-slate-300 rounded-2xl mt-6 p-4"
                ></textarea>
                <div className="mt-6 flex flex-col items-start w-full">
                  <span>Добавление комплектация услуг</span>
                  <div className="flex ">
                    <div className="mt-6 w-80 border rounded-3xl  p-3 px-6 bg-slate-300 flex items-center justify-between">
                      <span className="font-normal text-slate-800 text-sm">
                        Пакет премиум
                      </span>
                      <AiOutlineDelete />
                    </div>
                    <div className="mt-6 w-32 border rounded-3xl  p-3 px-6 bg-slate-300 flex items-center justify-center text-center ml-4">
                      <span className="font-normal text-slate-800 text-sm">
                        Цена
                      </span>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mt-6 w-80 border rounded-3xl  p-3 px-6 bg-slate-300 flex items-center justify-between">
                      <span className="font-normal text-slate-800 text-sm">
                        Базовый
                      </span>
                      <AiOutlineDelete />
                    </div>
                    <div className="mt-6 w-32 border rounded-3xl  p-3 px-6 bg-slate-300 flex items-center justify-center text-center ml-4">
                      <span className="font-normal text-slate-800 text-sm">
                        Цена
                      </span>
                    </div>
                  </div>
                  <div className="w-14 h-14 mt-6 flex items-center justify-center bg-cyan-500 rounded-full">
                    <AiOutlinePlus className="w-12 h-12" />
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-24 flex justify-center mx-36">
                    <button className="rounded-3xl py-2 px-8 text-white bg-cyan-500">
                      Сохранить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default EditServiceModal;
