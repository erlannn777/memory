import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const DropDown = ({ children, openMy, setOpen, title, classes }) => {
    let openChild = (e) => {
        e.target.classList.toggle('isOpenedDD')
        let el = e.target.parentElement.parentElement.children[1]
        console.log(el)
        // el.classList.toggle('isOpenedDD')
        // el.classList.toggle('DD')

        if (openMy) {
            el.style.height = "auto"
        }
        else {
            el.style.height = "0"
        }

        setOpen(!openMy)
        // console.log(.classList.add('isOpenedDD'))
    }
    return (
        <div className={'DropDown ' + classes}>
            <div className='grid grid-cols-12 items-center' onClick={openChild}>
                <p className='col-span-11 text-2xl'>{title}</p>
                {
                    openMy
                        ?
                        <IoIosArrowUp className='col-span-1 text-2xl' color='rgba(246, 171, 58, 0.87)' />
                        :
                        <IoIosArrowDown className='col-span-1 text-2xl' color='rgba(246, 171, 58, 0.87)' />
                }
            </div>
            <div className='DD'>{children}</div>
        </div>
    );
};

export default DropDown;