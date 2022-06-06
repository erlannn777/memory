import React, { useState } from 'react';
import "./chat.css"
import Modal from "../users/Modal"
import { GoArrowUp } from "react-icons/go"

const Chat = () => {
    const [modalAvtive, setModalActive] = useState(false);
    return (
        <div className='w-full text-center justify-center grid'>
            <h1 className='text-2xl mt-4 mb-8'>Чат</h1>
            <div className='chatWrapper grid grid-rows-6 grid-cols-6'>
                <form action="" className='col-span-2 row-span-1 mt-8 border-b border-gray-200'>
                    <input type="text" placeholder='Поиск' className="py-3 mx-4 px-4 border-2 border-gray-300" style={{ borderRadius: "2rem", backgroundColor: "#F4F4F4" }} />
                </form>
                <div className='col-span-4 row-span-1 border-l border-b border-gray-200'>
                    <h2 className='text-2xl font-bold mt-6'>Борисова Снежана</h2>
                    <p className='text-sky-400 text-l font-bold'>7 495 755-69-93</p>
                </div>
                <div className='row-span-5 col-span-2 grid usersWrapper grid-rows-14 '>
                    <div className='grid grid-cols-6 row-span-1 userCard'>
                        <p className='col-span-5'>Борисова Снежана</p>
                        <p className='col-span-1 text-red-500'></p>
                    </div>
                    <div className='grid grid-cols-6 row-span-1 userCard'>
                        <p className='col-span-5'>Борисова Снежана</p>
                        <p className='col-span-1 text-red-500'>①</p>
                    </div>
                    <div className='grid grid-cols-6 row-span-1 userCard'>
                        <p className='col-span-5'>Борисова Снежана</p>
                        <p className='col-span-1 text-red-500'>①</p>
                    </div>
                    <div className='grid grid-cols-6 row-span-1 userCard'>
                        <p className='col-span-5'>Борисова Снежана</p>
                        <p className='col-span-1 text-red-500'>①</p>
                    </div>
                    <div className='grid grid-cols-6 row-span-1 userCard'>
                        <p className='col-span-5'>Борисова Снежана</p>
                        <p className='col-span-1 text-red-500'>①</p>
                    </div>
                    <div className='grid grid-cols-6 row-span-1 userCard'>
                        <p className='col-span-5'>Борисова Снежана</p>
                        <p className='col-span-1 text-red-500'>①</p>
                    </div>
                    <div className='grid grid-cols-6 row-span-1 userCard'>
                        <p className='col-span-5'>Борисова Снежана</p>
                        <p className='col-span-1 text-red-500'>①</p>
                    </div>
                    <div className='grid grid-cols-6 row-span-1 userCard'>
                        <p className='col-span-5'>Борисова Снежана</p>
                        <p className='col-span-1 text-red-500'>①</p>
                    </div>
                    <div className='grid grid-cols-6 row-span-1 userCard'>
                        <p className='col-span-5'>Борисова Снежана</p>
                        <p className='col-span-1 text-red-500'>①</p>
                    </div>
                    <div className='grid grid-cols-6 row-span-1 userCard'>
                        <p className='col-span-5'>Борисова Снежана</p>
                        <p className='col-span-1 text-red-500'>①</p>
                    </div>
                    <div className='grid grid-cols-6 row-span-1 userCard'>
                        <p className='col-span-5'>Борисова Снежана</p>
                        <p className='col-span-1 text-red-500'>①</p>
                    </div>
                    <div className='grid grid-cols-6 row-span-1 userCard'>
                        <p className='col-span-5'>Борисова Снежана</p>
                        <p className='col-span-1 text-red-500'>①</p>
                    </div>
                    <div className='grid grid-cols-6 row-span-1 userCard'>
                        <p className='col-span-5'>Борисова Снежана</p>
                        <p className='col-span-1 text-red-500'>①</p>
                    </div>

                </div>
                <div className='row-span-5 col-span-4 border-l chatBlock border-gray-200 grid grid-rows-6'>
                    <div className='row-span-5'>
                        <div className='text-center text-gray-400 mb-4'>Сегодня</div>
                        <div className='messageWrapper messageWrapperY'>
                            <div className='message messageY'>
                                Здравствуйте, я хотела уточнить на счет комплектации
                            </div>
                            <p>Отправлено: 08:30</p>
                        </div>
                        <div className='messageWrapper messageWrapperM'>
                            <div className='bg-sky-400 message messageM'>
                                Здравствуйте. Готовы Вам помочь
                            </div>
                            <p>Отправлено: 08:36</p>
                        </div>
                    </div>
                    <form action="" className='row-span-1 bg-white'>
                        <input type="text" placeholder='Текст сообщения' className="py-3 pl-4 border-2 border-gray-300 mt-6" style={{ borderRadius: "2rem", backgroundColor: "#F4F4F4", width: "26vw" }} />
                        <button className='bg-sky-400 p-2 text-white arrowAccept' style={{ borderRadius: "2rem" }}><GoArrowUp /></button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Chat;