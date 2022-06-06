import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useAppDispatch } from "../../store";
import { closeOrderModal } from "../../store/ui/actions";
import { useOrderModal } from "../../store/ui/hooks";

const NewOrderModal = () => {
  const dispatch = useAppDispatch();
  const orderModal = useOrderModal();
  return (
    <Transition.Root show={orderModal.open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-20 inset-0 overflow-y-auto"
        onClose={() => dispatch(closeOrderModal())}
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
                onClick={() => dispatch(closeOrderModal())}
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
                <div className="w-full text-center">
                  <span className="text-5xl font-medium">
                    Номер заказа: 3453
                  </span>
                </div>
                <table className="mt-6">
                  <tbody>
                    <tr className="text-start">
                      <td align="left">
                        <div className="flex items-start mr-3 p-2 justify-start border  rounded-md">
                          <div>
                            <img
                              className="object-cover rounded-md w-20 h-20"
                              src="http://luk-media.ru/blog/nemcov/panihida/DSC06084.jpg"
                              alt=""
                            />
                          </div>
                          <div className="ml-2">
                            <span className="break-words font-medium">
                              Кремация. ПамятьKing Услуги
                            </span>
                            <br />
                            <span className="break-words font-semibold text-cyan-500">
                              4500 ₽
                            </span>
                          </div>
                        </div>
                      </td>
                      <td align="left">
                        <div className="flex items-start p-2 justify-start border  rounded-md">
                          <div>
                            <img
                              className="object-cover rounded-md w-20 h-20"
                              src="http://luk-media.ru/blog/nemcov/panihida/DSC06084.jpg"
                              alt=""
                            />
                          </div>
                          <div className="ml-2">
                            <span className="break-words font-medium">
                              Кремация. ПамятьKing Услуги
                            </span>
                            <br />
                            <span className="break-words font-semibold text-cyan-500">
                              4500 ₽
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left">Дата заказа: 24.04.2022 12:30</td>
                      <td align="left">7 495 755-69-83</td>
                    </tr>
                    <tr>
                      <td align="left">Сумма заказа: 9 000 ₽</td>
                      <td align="left"></td>
                    </tr>
                    <tr>
                      <td align="left">Данные</td>
                      <td align="left">Данные о погибшем</td>
                    </tr>
                    <tr>
                      <td align="left">
                        <span>Ф.И.О</span>
                        <br />
                        <span>Борисова Снежана Евгеньевна</span>
                      </td>
                      <td align="left">
                        <span>Ф.И.О</span>
                        <br />
                        <span>Борисов Виктор Станиславович</span>
                      </td>
                    </tr>
                    <tr>
                      <td align="left">
                        <span>Адрес</span>
                        <br />
                        <span>Москва, пер. Садовый, д. 3</span>
                      </td>
                      <td align="left">
                        <span>Дата рождения</span>
                        <br />
                        <span>24.11.1945</span>
                      </td>
                    </tr>
                    <tr>
                      <td align="left">
                        <span>Номер телефона</span>
                        <br />
                        <span>89512456337881</span>
                      </td>
                      <td align="left">
                        <span>Дата смерти</span>
                        <br />
                        <span>16.03.2022</span>
                      </td>
                    </tr>
                    <tr>
                      <td align="left">
                        <span>Паспортные данные</span>
                        <br />
                        <span>3013 955412</span>
                      </td>
                      <td align="left">
                        <span>
                          Номер с-ва о смерти и дата выдачи (если есть)
                        </span>
                        <br />
                        <span>2386548349173 от 16.03.2022</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default NewOrderModal;
