import React, { useState } from 'react';
import "./QA.css"
import Modal from "../users/Modal"

const QA = () => {
    const [modalAvtive, setModalActive] = useState(false);
    const [modalAvtiveAdd, setModalActiveAdd] = useState(false);
    return (
        <div className='w-full'>
            <h1 className='text-2xl text-center mt-4 font-bold'>Вопрос-ответ</h1>
            <div className='grid grid-cols-8 gap-8 mt-12'>
                <div className='col-span-2'></div>
                <div className='w-full col-span-4 grid grid-cols-4 gap-9'>
                    <div className='px-4 py-6 bg-white align-center grid justify-center card' style={{ cursor: "pointer" }} onClick={() => { setModalActive(true) }}>Когда происходит оплата?</div>
                    <div className='px-4 py-6 bg-white align-center grid justify-center card' style={{ cursor: "pointer" }} onClick={() => { setModalActive(true) }}>Как отменить заказ?</div>
                    <div className='px-4 py-6 bg-white align-center grid justify-center card' style={{ cursor: "pointer" }} onClick={() => { setModalActive(true) }}>Как сделать заказ?</div>
                    <div className='px-4 py-6 bg-white align-center grid justify-center card cardAdd' style={{ cursor: "pointer" }} onClick={() => { setModalActiveAdd(true) }}>✚</div>
                </div>
                <div className='col-span-2'></div>
            </div>
            <Modal active={modalAvtive} setActive={setModalActive} >
                <div className="text-center w-full mx-16 my-4">
                    <h2 className="text-2xl font-bold">Редактирование вопроса-ответа</h2><b className="cursor-pointer closeModal" onClick={() => setModalActive(false)}>✖</b>
                    <form action="" name="push" method="POST" className="mt-16">
                        <input type="text" className="block w-full py-3 px-4" style={{ borderRadius: "2rem", backgroundColor: "#F4F4F4" }} placeholder="Заголовок" />
                        <textarea name="" id="" className="block w-full py-3 px-4 rounded-lg mt-4 h-52 mb-20" style={{ backgroundColor: "#F4F4F4" }} placeholder="Текст..."></textarea>
                        <div className='grid grid-rows-2 gap-5 align-center justify-center' >
                            <button type="submit" className="bg-sky-400 block text-white font-bold px-24 py-2" style={{ borderRadius: "2rem", width: "100%" }}>Сохранить</button>
                            <button type="submit" className="text-white block font-bold px-12 py-2" style={{ borderRadius: "2rem", backgroundColor: "#F46D6D", width: "100%" }}>Удалить</button>
                        </div>
                    </form>
                </div>
            </Modal>
            <Modal active={modalAvtiveAdd} setActive={setModalActiveAdd} >
                <div className="text-center w-full mx-16 my-4">
                    <h2 className="text-2xl font-bold">Добавить вопрос-ответ</h2><b className="cursor-pointer closeModal" onClick={() => setModalActiveAdd(false)}>✖</b>
                    <form action="" name="push" method="POST" className="mt-16">
                        <input type="text" className="block w-full py-3 px-4" style={{ borderRadius: "2rem", backgroundColor: "#F4F4F4" }} placeholder="Вопрос" />
                        <textarea name="" id="" className="block w-full py-3 px-4 rounded-lg mt-4 h-52 mb-20" style={{ backgroundColor: "#F4F4F4" }} placeholder="Ответ"></textarea>
                        <div className='grid grid-rows-2 gap-5 align-center justify-center' >
                            <button type="submit" className="bg-sky-400 block text-white font-bold px-24 py-2" style={{ borderRadius: "2rem", width: "100%" }}>Создать</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}


export default QA;