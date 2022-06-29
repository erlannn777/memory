import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs'

const WeCallYou = () => {
    return (
        <div className='grid grid-cols-12 py-16 mt-12' style={{ background: "rgba(250, 250, 250, 1)" }}>
            <div className="col-span-3 w-full grid justify-center items-center">
                <div style={{ background: "rgba(246, 171, 57, 1)" }} className=" shadow-md shadow-black rounded-full w-20 h-20 align-middle grid justify-center items-center cursor-pointer">
                    <BsFillTelephoneFill color='white' className='w-10 h-10' />
                </div>
            </div>
            <div className='col-span-6 grid grid-flow-row items-center justify-center'>
                <h1 className='text-4xl font-semibold text-center mb-4'>Мы Вам перезвоним</h1>
                <p className='text-center text-lg   '>Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы Вам перезвоним.</p>
                <form action="" className='grid grid-flow-col gap-6 pt-8'>
                    <input type="text" placeholder='Ваше имя' className='w-full py-2 px-2 text-lg font-semibold' />
                    <input type="text" placeholder='Ваш Email' className='w-full py-2 px-2 text-lg font-semibold' />
                    <button className='py-4 px-16 font-semibold text-black' style={{ background: "rgba(246, 171, 57, 1)" }}>Отправить</button>
                </form>
            </div>
            <div className="col-span-3">

            </div>
        </div>
    );
};

export default WeCallYou;