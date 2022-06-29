import React from 'react';
import img from '../../../../img/catalog.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const CattalogItem = ({ item }) => {
    return (
        <div className='' style={{ backgroundColor: "rgba(0, 0, 0, 0.03)" }}>
            <div className="grid grid-cols-4 gap-8 p-4">
                <div className="col-span-4 grid grid-cols-4 gap-12">
                    {
                        item.avaible
                            ?
                            <div className='flex col-span-2 align-middle gap-2'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" fill="white" />
                                    <path d="M6 10L9 13L14 7" stroke="#24C56E" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>В наличии</p>
                            </div>
                            :
                            <div className='flex col-span-2 align-middle gap-2'>
                                <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="22" transform="translate(0 0.5)" fill="white" />
                                    <path d="M14 7.5L6 15.5M14 15.5L6 7.5L14 15.5Z" stroke="#E44286" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>Нет в наличии</p>
                            </div>
                    }
                    {
                        item.oldPrice != 0
                            ?
                            <div className='bg-white text-black grid align-middle text-center col-span-2 w-full'>
                                <p>{Math.round(100 - (item.price / (item.oldPrice / 100)))}%</p>
                            </div>
                            :
                            <div className='col-span-2 grid'></div>
                    }
                </div>


            </div>
            <img src={img} alt="" className='w-full' />
            <div className="bg-white p-2 py-3 text-gray-600 grid align-middle">
                <p className='text-2xl mb-6'> ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС NIBE F1345</p>
                <div className='grid grid-cols-2 gap-72 items-center'>
                    <div className="text-black text-2xl font-semibold align-middle grid">
                        {item.price}₽
                    </div>
                    <button style={{ backgroundColor: "rgba(246, 171, 58, 0.87)", maxWidth: "2.5vw", maxHeight: "2.5vw" }} className="p-4 m-auto grid items-center text-center justify-center">
                        <AiOutlineShoppingCart />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default CattalogItem;