import React from "react";
import cl from "./header.module.css";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5"
import { BsFillTelephoneFill } from "react-icons/bs"
import { FiShoppingCart } from "react-icons/fi"
import logo from "../../img/logo.png"

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.headerPromo}><p>Cкидка 10% по промокоду "TEPLO" на все заказы до 10.09</p><span>Обратный звонок</span></div>
            <nav className={cl.nav}>
                <ul className={cl.navList + " " + "text-xl"}>
                    <li className={cl.navListItem}><img className={cl.navListLogo} src={logo} alt="" /></li>
                    <Link to={'/'}><li className={cl.navListItem + " " + "text-xl"}>Главная</li></Link>
                    <Link to={'/catalog'}><li className={cl.navListItem + " " + "text-xl"}>Каталог<FiChevronDown /></li></Link>
                    <li className={cl.navListItem + " " + "text-xl"}>О нас</li>
                    <li className={cl.navListItem + " " + "text-xl"}>Еще <FiChevronDown /></li>
                    <li className={cl.navListItem + " " + "text-xl my-4" + " " + cl.search}><IoSearchOutline className={cl.loupe} /><form action="" className={cl.form}><input placeholder="Поиск" type="text" className={cl.navListItemInput} /><button className={cl.navListItemBtn}>Найти</button></form></li>
                    <li className={cl.navListItem + " " + cl.phoneItem + " " + "text-xl"}><div className={cl.phoneWrapper} ><BsFillTelephoneFill className={cl.phone} /></div><span>+7 (964) 945 41 38</span></li>
                    <li className={cl.navListItem + " " + "text-xl"}><FiShoppingCart stroke="#F6AB3A" className={cl.yellow} /></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
