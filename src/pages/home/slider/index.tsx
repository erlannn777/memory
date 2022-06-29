import React, { useState, useMemo } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { GoPrimitiveDot } from 'react-icons/go'
import { TbCircleDot } from 'react-icons/tb'
import cl from './slider.module.css'
import img from "../../../img/slide.png"

const Slider = ({ classess, slides, setSlides }) => {
    let [slide, setSlide] = useState(0);
    let slideWatcher = useMemo(() => {
        setSlides(slides =>
            slides.map(sl =>
                sl.id - 1 == slide
                    ? { ...sl, selected: true }
                    : { ...sl, selected: false }
            ))
    }, [slide])
    console.log(slides)
    function next() {
        setSlide(slide + 1)
        // let n = slides.length
        // setSlides(slides =>
        //     slides.map(sl =>
        //         sl.id - 1 == slide
        //             ? { ...sl, selected: true }
        //             : { ...sl, selected: false }
        //     )
        // )

        if (slide >= slides.length - 1) {
            setSlide(0)
            // setSlides(slides =>
            //     slides.map(sl =>
            //         (sl.id - 1) == slide
            //             ? { ...sl, selected: true }
            //             : { ...sl, selected: false }
            //     )
            // )
        }
    }
    function previos() {
        setSlide(slide - 1)
        let n = slides.length
        setSlides(slides =>
            slides.map(sl =>
                sl.id == slide + 1
                    ? { ...sl, selected: true }
                    : { ...sl, selected: false }
            )

        )

        if (slide < 1) {
            setSlide(slides.length - 1)
            setSlides(slides =>
                slides.map(sl =>
                    sl.id == slide + 1
                        ? { ...sl, selected: true }
                        : { ...sl, selected: false }
                )
            )
        }
    }
    return (
        <div className={classess}>
            <div className={cl.sliderContainer}>
                {slides.map((sl, i) =>
                    sl.selected == true
                        ?
                        <div>
                            <div className={cl.slide}>
                                <div className={cl.imgWrapper}>
                                    <img src={img} alt="" />
                                </div>
                                <div className={cl.slideInfo}>
                                    <h2 className={cl.slideName}>{sl.name}</h2>
                                    <div className={cl.slideAbouts}>
                                        <p className={cl.slideAbout}>{sl.about}</p>
                                        <div className={cl.prices}>
                                            <p className={cl.priceTitle}>Цена</p>
                                            <div className={cl.pricesAll}>
                                                <div className={cl.priceNow}>{sl.price}₽</div>
                                                <div className={cl.priceOld}>{sl.oldprice}₽</div>
                                            </div>
                                            <button className={cl.toCartBtn}>Добавить в корзину</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={cl.navigaton}>
                                    <button onClick={() => { previos() }}> <MdOutlineKeyboardArrowLeft color='' size={'40'} /> </button>
                                    {
                                        slides.map((sl, i) =>
                                            i == slide
                                                ? <button key={sl.id}><GoPrimitiveDot color='rgba(246, 171, 58, 0.6)' /></button>
                                                : <button key={sl.id} onClick={(e) => setSlide(sl.id - 1)}><TbCircleDot color='rgba(246, 171, 58, 0.6)' /></button>
                                        )
                                    }
                                    <button onClick={() => { next() }}> <MdOutlineKeyboardArrowRight color='' size={'40'} /> </button>
                                </div>
                            </div>

                        </div>
                        : <div></div>
                )}
            </div>

        </div >
    );
};

export default Slider;