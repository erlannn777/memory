import React, { useState } from "react";
import Slider from "./slider";
import slideImg from "../../img/slide.png"
import Why from "./Why";
import PopProd from "../../components/popProd";
import Articles from "../../components/Articles/Articles";
import WeCallYou from "../../components/WeCallYou/WeCallYou";
const Home = () => {
    let [slides, setSlides] = useState([
        { about: "Геотермальный тепловой SGLA GM-10 S (H)  и горячего водоснабжения... Подходит для установки на деревянную/межкомнатную дверь.", price: "2145 000", oldprice: "370 00", name: 'ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС SILA GM-10 S (H)', img: "../../img/slide.png", id: 1, selected: true },
        { about: "Геотермальный тепловой насос SILA GM-10 S (f) использования в системах отопления и горячего водоснабжения... Подходит для установки на деревянную/межкомнатную дверь.", price: "2245 000", oldprice: "370 00", name: 'ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС SILA GM-10 S (f)', img: "../../img/slide.png", id: 2, selected: false },
        { about: "Геотермальный тепловой насос SILA GM-10 S (B) предназначен для использования в системах отопления и горячего водоснабжения... Подходит для установки на деревянную/межкомнатную дверь.", price: "2345 000", oldprice: "370 00", name: 'ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС SILA GM-10 S (B)', img: "../../img/slide.png", id: 3, selected: false },
    ])
    let [pops, setPops] = useState([
        {
            title: 'ТЕПЛОВОЙ НАСОС ДЛЯ БАССЕЙНА SILA AM-07 IS (HC)',
            promotionProc: 21,
            price: '33000',
            oldPrice: 37000,
            img: '',
            avible: true,
        },
        {
            title: 'ТЕПЛОВОЙ НАСОС ДЛЯ БАССЕЙНА SILA AM-07 IS (HC)',
            promotionProc: 21,
            price: '33000',
            oldPrice: 37000,
            img: '',
            avible: true,
        },
        {
            title: 'ТЕПЛОВОЙ НАСОС ДЛЯ БАССЕЙНА SILA AM-07 IS (HC)',
            promotionProc: 0,
            price: '33000',
            oldPrice: 0,
            img: '',
            avible: true,
        },
        {
            title: 'ТЕПЛОВОЙ НАСОС ДЛЯ БАССЕЙНА SILA AM-07 IS (HC)',
            promotionProc: 21,
            price: '33000',
            oldPrice: 37000,
            img: '',
            avible: false,
        },
        {
            title: 'ТЕПЛОВОЙ НАСОС ДЛЯ БАССЕЙНА SILA AM-07 IS (HC)',
            promotionProc: 21,
            price: '33000',
            oldPrice: 37000,
            img: '',
            avible: false,
        }, {
            title: 'ТЕПЛОВОЙ НАСОС ДЛЯ БАССЕЙНА SILA AM-07 IS (HC)',
            promotionProc: 0,
            price: '33000',
            oldPrice: 0,
            img: '',
            avible: true,
        }

    ])

    return (
        <div className="text-base">
            <Slider classess={''} slides={slides} setSlides={setSlides} />
            <Why />
            <PopProd pops={pops} />
            <Articles />
            <WeCallYou />
        </div>

    );
};

export default Home;
