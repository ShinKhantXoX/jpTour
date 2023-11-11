import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isToggle } from '../services/redux/sideSlice'
import { FiX } from "react-icons/fi"

const SideNavComponent = () => {

    const dispatch = useDispatch();
    const side = useSelector((state) => state.side.side);
    console.log(side);

    return (

            <div className={`bg-white min-h-screen fixed z-[10] top-0 ${side ? 'left-0 w-[80%] block' : '-left-[100%] w-0 hidden'}`}>
                side nav
                <FiX onClick={() => dispatch(isToggle())} size={30} className=' absolute top-5 right-5' />
            </div>
    )
}

export default SideNavComponent