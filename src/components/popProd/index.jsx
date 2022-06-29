import React, { useState } from 'react';
import cl from './popProd.module.css';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import Item from './components/Item';

const PopProd = ({ pops }) => {
    let [scroll, setScroll] = useState(0);
    let click = (e) => {
        document.querySelector(cl.wrapperOfItems).scrollLeft = 9999;
        console.log(document.querySelector(cl.wrapperOfItems))
    }
    return (
        <div className={cl.wrapper}>
            <div className={cl.headerOfPopsWrapper}>
                <h1 className={cl.headerOfPops}>Наши популярные продукты</h1>
                <div className={cl.wrapperOfArrows}>
                    <button ><RiArrowLeftSLine /></button>
                    <button onClick={click}><RiArrowRightSLine /></button>
                </div>
            </div>
            <div className={cl.wrapperOfItems} >
                {
                    pops.map((pop) => {
                        return <Item item={pop} cl={cl} />
                    })
                }
            </div>
        </div>



    );
};

export default PopProd;