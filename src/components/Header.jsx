import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi"
import SideNavComponent from './SideNavComponent'
import { useDispatch } from 'react-redux'
import { isToggle } from '../services/redux/sideSlice'

const Header = () => {

    const dispatch = useDispatch();

    const [scroll,setScroll] = useState(true);

    const scrollHandler = () => {
      if (window.scrollY >= 100) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };
  
    window.addEventListener("scroll", scrollHandler);


  return (
    <header className={`${scroll ? "absolute" : " bg-primary text-primary animate-slidedown fixed top-0 bg-opacity-80 backdrop-blur backdrop-filter"} w-full px-[20px] md:px-[60px] lg:px-[120px] py-10 top-0 left-0 z-50`}>
        <div className=' w-full flex items-center justify-between gap-5'>
            <img src="/Logo.svg" alt="" />

            <div className=' hidden lg:block md:w-[600px] text-white'>
                <ul className=' w-full flex items-center justify-between'>
                    <li className=' cursor-pointer'>
                        Destinations
                    </li>
                    <li className=' cursor-pointer'>
                        Interests
                    </li>
                    <li className=' cursor-pointer'>
                        Plan A Trip
                    </li>
                    <li className=' cursor-pointer'>
                        Farum
                    </li>
                    <li className=' cursor-pointer'>
                        Videos
                    </li>
                </ul>
            </div>

            <div className=' text-white md:block lg:hidden'
            onClick={() => dispatch(isToggle())}
            >
                <FiAlignJustify size={30} />
            </div>

            <SideNavComponent />

        </div>
    </header>
  )
}

export default Header