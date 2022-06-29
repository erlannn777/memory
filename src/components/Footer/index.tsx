import React from 'react';
import cl from './footer.module.css'
import logo from '../../img/logo.png'
import vk from "../../img/vk.png"

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.footerUpper}>
                <div className={cl.footerUpperItem + cl.footerUpperItemLogo}><img src={logo}></img></div>
                <div className={cl.footerUpperItem}>
                    <h3 className={cl.footerUpperItemHeader}>Навигация</h3>
                    <a href="#" className={cl.footerUpperItemItem}>Главная</a>
                    <a href="#" className={cl.footerUpperItemItem}>Каталог</a>
                    <a href="#" className={cl.footerUpperItemItem}>Вопрос-ответ</a>
                    <a href="#" className={cl.footerUpperItemItem}>О нас</a>
                </div>
                <div className={cl.footerUpperItem}>
                    <h3 className={cl.footerUpperItemHeader}>Наши контакты</h3>
                    <p className={cl.footerUpperItemItem}>Телефоны</p>
                    <a href="#" className={cl.footerUpperItemItem}>+7 (964) 945 41 38</a>
                    <p className={cl.footerUpperItemItem}>Email</p>
                    <a href="#" className={cl.footerUpperItemItem}>info@keypumps.ru</a>
                </div>
                <div className={cl.footerUpperItem}>
                    <h3 className={cl.footerUpperItemHeader}>Наш Адрес</h3>
                    <p className={cl.footerUpperItemItem}>Россия,</p>
                    <p className={cl.footerUpperItemItem}>г. Сочи, ул. Горького, 87</p>
                    <p className={cl.footerUpperItemItem}></p>
                    <p className={cl.footerUpperItemItem}></p>
                </div>
                <div className={cl.footerUpperItem}>
                    <h3 className={cl.footerUpperItemHeader}>Информация</h3>
                    <a href="#" className={cl.footerUpperItemItem}>Доставка и оплата</a>
                    <a href="#" className={cl.footerUpperItemItem}>Гарантии</a>
                    <a href="#" className={cl.footerUpperItemItem}>Возврат товара</a>
                    <p className={cl.footerUpperItemItem}></p>
                </div>
            </div>
            <div className={cl.itemsOfIcons}>
                <img className={cl.invert + " " + cl.icon} src={vk} alt="" />
            </div>
            <hr className={cl.hr} />
            <p className={cl.under + " " + cl.textCenter}>ⓒ 2022 KeyPumps All rights reserved.</p>
        </footer>
    );
};

export default Footer;