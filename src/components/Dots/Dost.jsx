import React from 'react';
import cl from './dost.module.css'

const Dost = ({ width, heigth, style }) => {
    return (
        <div className={cl.dots} style={style}>
            <div className={cl.dotsStr}>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
            </div>
            <div className={cl.dotsStr}>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
            </div>
            <div className={cl.dotsStr}>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
            </div>
            <div className={cl.dotsStr}>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
            </div>
            <div className={cl.dotsStr}>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
            </div>
            <div className={cl.dotsStr}>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
                <div className={cl.dot}></div>
            </div>
        </div>
    );
};

export default Dost;