import React from 'react';
import img from '../../../img/kond.png'

const Item = ({ item, cl }) => {
    return (
        <div className={cl.item}>
            {
                item.avible
                    ?
                    <div className={cl.itemHeader}>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4L4 7L9 1" stroke="#24C56E" stroke-linecap="round" stroke-linejoin="round" />
                        </svg><p>В наличие</p>
                        <div className={cl.promotion}>
                            {
                                item.oldPrice != 0
                                    ? "-" + (Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)) + "%"
                                    : ""
                            }
                        </div>
                    </div>

                    : <div className={cl.itemHeader}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 1L1 9M9 9L1 1L9 9Z" stroke="#E44286" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Не в наличие</p>
                        <div className={cl.promotion}>
                            {
                                item.oldPrice != 0
                                    ? "-" + (Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)) + "%"
                                    : ""
                            }
                        </div>
                    </div>
            }
            <div className={cl.imgWrapper}>
                <img src={img} alt="" />
            </div>
            <div className={cl.itemFooter}>
                <div className={cl.itemFooterTitle}>
                    {item.title}
                </div>
                <div className={cl.itemPrices}>
                    <p className={cl.priceNow}>{item.price}₽</p>
                    <p className={cl.priceOld}>{item.oldPrice ? item.oldPrice + "₽" : ""}</p>
                </div>
            </div>
        </div>
    );
};

export default Item;