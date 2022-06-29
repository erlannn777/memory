import React from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import img from '../../img/article.png';

const Articles = () => {
    return (
        <div className='mx-32 mt-32 '>
            <div className='grid grid-cols-12 gap-6'>
                <h1 className="text-4xl col-span-11 font-bold">Статьи</h1>
                <div className='col-span-1 grid grid-cols-2'>
                    <button className='h-full w-full'><RiArrowLeftSLine className='h-16 w-16' /></button>
                    <button className='h-full w-full'><RiArrowRightSLine className='h-16 w-16' /></button>
                </div>
            </div>
            <div className="grid gap-4 overflow-x-scroll w-full h-full grid-flow-col">
                <div className="grid col-span-1 grid-rows-8 bg-slate-100 w-full" style={{ width: "28.5vw" }}>
                    <img src={img} alt="" className='row-span-5' />
                    <p className='row-span-1  pt-4 px-6 text-center font-bold pb-2'>МАКСИМАЛЬНОЕ КПД И ЭФФЕКТИВНОСТЬ СОЛНЕЧНОГО КОЛЛЕКТОРА</p>
                    <p className='row-span-1  px-6 font-semibold text-lg'>Солнечные коллекторы</p>
                    <p className="row-span-1  pb-4 px-6 font-semibold text-lg">9 апреля 2022</p>
                </div>
                <div className="grid grid-rows-8 col-span-1 bg-slate-100" style={{ width: "28.5vw" }}>
                    <img src={img} alt="" className='row-span-5' />
                    <p className='row-span-1  pt-4 px-6 text-center font-bold pb-2'>МАКСИМАЛЬНОЕ КПД И ЭФФЕКТИВНОСТЬ СОЛНЕЧНОГО КОЛЛЕКТОРА</p>
                    <p className='row-span-1  px-6 font-semibold text-lg'>Солнечные коллекторы</p>
                    <p className="row-span-1  pb-4 px-6 font-semibold text-lg">9 апреля 2022</p>
                </div>
                <div className="grid grid-rows-8 bg-slate-100 col-span-1" style={{ width: "28.5vw" }}>
                    <img src={img} alt="" className='row-span-5' />
                    <p className='row-span-1  pt-4 px-6 text-center font-bold pb-2'>МАКСИМАЛЬНОЕ КПД И ЭФФЕКТИВНОСТЬ СОЛНЕЧНОГО КОЛЛЕКТОРА</p>
                    <p className='row-span-1  px-6 font-semibold text-lg'>Солнечные коллекторы</p>
                    <p className="row-span-1  pb-4 px-6 font-semibold text-lg">9 апреля 2022</p>
                </div>
                <div className="grid grid-rows-8 bg-slate-100 col-span-1" style={{ width: "28.5vw" }}>
                    <img src={img} alt="" className='row-span-5' />
                    <p className='row-span-1  pt-4 px-6 text-center font-bold pb-2'>МАКСИМАЛЬНОЕ КПД И ЭФФЕКТИВНОСТЬ СОЛНЕЧНОГО КОЛЛЕКТОРА</p>
                    <p className='row-span-1  px-6 font-semibold text-lg'>Солнечные коллекторы</p>
                    <p className="row-span-1  pb-4 px-6 font-semibold text-lg">9 апреля 2022</p>
                </div>
            </div>
        </div>
    );
};

export default Articles;