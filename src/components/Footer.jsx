import React from 'react'
import { BsFacebook, BsMessenger, BsTelegram } from "react-icons/bs"

const Footer = () => {


  const destination = [
    "Tokyo", "Kyoto", "Osaka", "Nara", "Mount Fuji", "Hiroshima", "Kamakura", "Kobe", "Nagoya", "Hakone", "Nikko"
  ];

  const region = [
    "Hokkaido", "Tohoku", "Kanto", "Chubu", "Kansai", "Chugoku", "Shikoku", "Kyushu", "Okinawa"
  ];

  const interest = [
    "Temples", "Shrines", "Castles", "Onsen", "Food and Drink", "Manga and Anime", "Gardens", "Hiking", "Shopping", "Flowers"
  ];

  return (
    <div className='px-[20px] md:px-[60px] lg:px-[120px] bg-primary text-white mt-20'>

      <div className=' grid grid-cols-4 gap-3'>

        <div className=' col-span-4 md:col-span-2 lg:col-span-1 col-start-1'>

          <h1 className=' text-lg font-bold mt-10'>Destinations</h1>

          <ul className=' mt-5'>
            {destination?.map(des => {
              return (
                <li key={des} className=' mt-3 cursor-pointer'>
                  {des}
                </li>
              )
            })}
          </ul>

        </div>
        <div className=' col-span-4 md:col-span-2 lg:col-span-1 col-start-1 md:col-start-2'>

          <h1 className=' text-lg font-bold mt-10'>Regions of Japan</h1>

          <ul className=' mt-5'>
            {region?.map(reg => {
              return (
                <li key={reg} className=' mt-3 cursor-pointer'>
                  {reg}
                </li>
              )
            })}
          </ul>

        </div>
        <div className=' col-span-4 md:col-span-2 lg:col-span-1 col-start-1 md:col-start-3'>

          <h1 className=' text-lg font-bold mt-10'>Interests</h1>

          <ul className=' mt-5'>
            {interest?.map(inter => {
              return (
                <li key={inter} className=' mt-3 cursor-pointer'>
                  {inter}
                </li>
              )
            })}
          </ul>

        </div>
        <div className=' col-span-4 md:col-span-2 lg:col-span-1 col-start-1 md:col-start-4'>

          <h1 className=' text-lg font-bold mt-10'>Forum</h1>

          <p className=' mt-5'>Question Forum</p>

          <div className=' flex items-center justify-start gap-5 mt-5'>
            <BsFacebook size={30} />
            <BsMessenger size={30} />
            <BsTelegram size={30} />

          </div>

        </div>

      </div>

      <div className=' w-full block lg:flex items-center justify-between mt-10 pb-10'>

        <div className=' flex items-end gap-5 w-full'>
          <img src="/Logo.svg" alt="" />
          <ul className=' w-full flex items-center gap-5'>
            <li className=' cursor-pointer'>About Us</li>
            <li className=' cursor-pointer'>Contact Us</li>
          </ul>
        </div>
        <div className=' lg:min-w-[400px] mt-10 lg:mt-0'>
          <p>Copyright © 2023 Travellian. All Rights Reserved.</p>
        </div>

      </div>


    </div>
  )
}

export default Footer