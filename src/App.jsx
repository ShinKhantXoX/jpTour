import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdArrowForwardIos } from "react-icons/md"

const formNavList = [
  "Hotels", "Fights", "Car", "Buses", "Tours"
];

const discover = [
  {
    title: 'Shiretoko',
    des: 'National park on an unspoiled peninsula.'
  },
  {
    title: 'Rishiri and Rebun',
    des: "Small islands near Hokkaido's northern tip."
  },
  {
    title: "Daisetsuzan",
    des: "Hokkaido's largest and wildest national..."
  },
  {
    title: "Niseko",
    des: "Leading snow resort with lots of powder..."
  },
  {
    title: "Sapporo",
    des: "The largest city on the island of Hokkaido."
  },
  {
    title: "Furano",
    des: "Towns with beautiful lavender and flower..."
  },
  {
    title: "Noboribetsu",
    des: "Towns with beautiful lavender and flower..."
  },
  {
    title: "Hakodate",
    des: "Southernmost city on Hokkaido."
  },
  {
    title: "Otaru",
    des: "Harbor city near Sapporo with a canal."
  },
  {
    title: "Lake Toya",
    des: "Site of Mount Usu, an active volcano."
  },
  {
    title: "Akan Mashu National Park",
    des: "National park with beautiful lakes."
  },
  {
    title: "Lake Shikotsu",
    des: "Picturesque caldera lake near Sapporo."
  }
];

const pinnacle = [
  {
    title: 'Tokyo',
    des: "Japan's capital and largest city.",
    url: '/Tokyo.png'
  },
  {
    title: 'Kyoto',
    des: 'For over 1000 years the capital of Japan.',
    url: '/Kyoto.png'
  },
  {
    title: 'Osaka',
    des: 'Largest city of the Kinki Region.',
    url: '/Osaka.png'
  },
  {
    title: 'Nara',
    des: "Japan's first permanent capital.",
    url: '/Nara.png'
  },
  {
    title: 'Mount Fuji',
    des: "The country's most iconic landmark",
    url: '/fuji.png'
  },
  {
    title: "Hiroshima",
    des: "Regional capital with a tragic history.",
    url: '/hiroshima.png'
  }
]

const App = () => {

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  console.log(counter);

  return (
    <>
      {/*Start Hero Section */}
      <div className=" bg-[url('/home-bg.png')] bg-[#00000090] w-full h-full pb-20 bg-no-repeat bg-cover">

        <div className=' px-[20px] md:px-[60px] lg:px-[120px] pt-[150px] grid grid-cols-2 gap-3'>

          <div className=' col-span-2 lg:col-span-1 col-start-1 '>

            <div className=' w-[90%]'>
              <h1 className=' text-3xl text-white font-bold tracking-wider'>Unveil Japan:</h1>
              <h3 className=' text-2xl text-white font-semibold tracking-wider'>Your Gateway to Authentic Discovery</h3>

              <p className=' mt-5 text-lg text-white'>
                “Embark on an immersive Japan travel experience, where ancient traditions meet modern wonders. Explore historic sites, savor exquisite cuisine, and embrace the vibrant culture of Japan with us”
              </p>
            </div>

          </div>
          <div className=' col-span-2 lg:col-span-1 col-start-1 lg:col-start-2 mt-10 lg:mt-0'>

            <div className=' bg-white rounded-lg backdrop-blur-lg opacity-60 w-full h-[430px] p-5'>

              <ul className=' flex items-center justify-between border-b-2 border-b-slate-200'>
                {formNavList?.map(list => {
                  return (
                    <li key={list} className=' pb-2 cursor-pointer' >{list}</li>
                  )
                })}
              </ul>

              <div className=' pt-5'>
                <h5 className=' text-lg mb-2'>City:</h5>
                <select name="" id="" className=' !bg-slate-200 w-full px-2 py-2 rounded-lg outline-none'>
                  <option value="country">Choose country</option>
                </select>
              </div>

              <div className=" pt-5 grid grid-cols-2 gap-3">

                <div className=" col-span-1 col-start-1">
                  <h5 className=' text-lg mb-2'>Check-in:</h5>
                  <input type="date" className=' bg-slate-200 w-full px-2 py-[5px] rounded-lg outline-none' />
                </div>
                <div className=' col-span-1 col-start-2'>
                  <h5 className=' text-lg mb-2'>Nights:</h5>
                  <select name="" id="" className=' !bg-slate-200 w-full px-2 py-2 rounded-lg outline-none'>
                    <option value="night">Choose night</option>
                  </select>
                </div>

              </div>

              <div className=' pt-5'>
                <h5 className=' text-lg mb-2'>With:</h5>
                <select name="" id="" className=' !bg-slate-200 w-full px-2 py-2 rounded-lg outline-none'>
                  <option value="booking">Booking.com</option>
                </select>
              </div>

              <div className=' w-full mt-5 py-2 rounded flex items-center justify-center bg-primary text-white'>
                <button className=' flex items-center justify-center gap-5'>Search Hotels <MdArrowForwardIos /> </button>
              </div>



            </div>

          </div>

        </div>

      </div>
      {/* End Hero Seciton */}

      {/* Start Discover Your Haven */}
      <div className=' px-[20px] md:px-[60px] lg:px-[120px]'>

        <h1 className=' pt-20 text-center text-3xl text-primary font-bold'>Discover Your Haven</h1>

        <div className=' grid grid-cols-2 gap-3'>

          <div className=" col-span-2 lg:col-span-1 col-start-1">

          </div>
          <div className=" col-span-2 lg:col-span-1 col-start-1 lg:col-start-2">

            <div className=' relative'>
              <h1 className=' text-2xl font-bold mt-10'>Travel Hotspots in <span className=' text-primary'>Hokkaido</span></h1>
              <span className=' w-[180px] h-[5px] bg-primary rounded absolute -bottom-1 left-0'></span>
            </div>

            {discover?.map(dis => {
              return (
                <div key={dis?.title} className=' block md:flex items-center justify-start gap-3 mt-3'>
                  <div className=' relative min-w-[240px]'>
                    <h1 className=' font-bold text-lg'>{dis?.title}</h1>
                    <span className=' w-[10px] md:w-[20px] h-[5px] bg-primary rounded absolute top-[50%] -translate-y-[50%] -left-4 md:-left-8'></span>
                  </div>
                  <div>
                    <p className=' tracking-wide'>{dis?.des}</p>
                  </div>
                </div>
              )
            })}

          </div>

        </div>

      </div>
      {/* End Discover Your Haven */}

      {/* Start Pinnacle */}


      <div className='px-[20px] md:px-[60px] lg:px-[120px] mt-10'>


        <div className=' flex items-center justify-center'>
          <div className=' relative'>
            <h1 className=' text-2xl font-bold mt-10'>Pinnacle Destination Picks in <span className=' text-primary'>Japan</span></h1>
            <span className='w-[180px] h-[5px] bg-primary rounded absolute bottom-7 lg:bottom-0 left-0'></span>
          </div>
        </div>

        <div className=' flex justify-start flex-wrap gap-3 mt-10'>

          {pinnacle?.map((pinn => {
            return (
              <div key={pinn?.url} className=' w-[400px] md:w-[300px] lg:w-[354px] h-[379px] border border-primary rounded-[16px]'>

                <img src={pinn?.url} className=' w-full p-2 md:p-3 h-[235px] !rounded-[10px]' alt={pinn?.title} />
                <div className=' relative'>
                  <h1 className=' text-2xl font-bold mt-3 ml-2 text-primary'>{pinn?.title}</h1>
                  <span className=' w-[30px] h-[5px] bg-primary rounded absolute -bottom-1 left-2'></span>
                </div>

                <p className=' ml-2 mt-3 tracking-wider'>{pinn?.des}</p>

              </div>
            )
          }))}


        </div>


      </div>


      {/* End Pinnacle */}

      {/* Start latest japan news */}

      <div className='px-[20px] md:px-[120px] mt-10'>

        <div className=' flex items-center justify-center'>
          <div className=' relative'>
            <h1 className=' text-2xl font-bold mt-10'>Latest <span className=' text-primary'>Japan Travel News</span></h1>
            <span className=' w-[130px] h-[5px] bg-primary rounded absolute -bottom-1 left-0'></span>
          </div>
        </div>

        <div className=' grid grid-cols-2 mt-10 lg:gap-5'>

          <div className=' col-span-2 lg:col-span-1 col-start-1'>

            <div>

              <img src="/news.png" className='w-full h-full rounded-[16px]' alt="" />

              <div className=' relative min-w-[240px] pl-8 mt-2'>
                <h1 className=' font-bold text-lg'>Travel News</h1>
                <span className=' w-[20px] h-[5px] bg-primary rounded absolute top-[50%] -translate-y-[50%] left-0'></span>
              </div>

              <h1 className=' font-bold text-2xl text-primary mt-3'>Travel Alerts and Disaster Updates</h1>

              <p className=' text-md tracking-wide pt-3'>
                Japan dropped all remaining COVID-related entry requirements (including the need of COVID testing/vaccination certificates) on April 29, 2023. With this, over three years of COVID-related border measures have come to an end.
              </p>

              <button className=' text-primary underline'>Read More</button>

            </div>

          </div>
          <div className=' col-span-2 lg:col-span-1 col-start-1 lg:col-start-2'>

            <div className=' block lg:flex items-start gap-5 mt-10 lg:mt-0'>

              <img src="/news.png" className=' w-full h-full lg:w-[178px] lg:h-[178px] rounded-[16px]' alt="" />

              <div>
                <div className=' relative min-w-[240px] pl-8'>
                  <h1 className=' font-bold text-lg'>Travel News</h1>
                  <span className=' w-[20px] h-[5px] bg-primary rounded absolute top-[50%] -translate-y-[50%] left-0'></span>
                </div>

                <h1 className=' font-bold text-lg text-primary'>Travel Alerts and Disaster Updates</h1>

                <p className=' tracking-wide text-sm mt-1'>
                  Japan dropped all remaining COVID-related entry requirements (including the need of COVID testing/vaccination certificates) on April 29, 2023. With this, over three years of COVID-related border measures have come to an end.
                </p>

                <button className=' text-primary underline'>Read More</button>
              </div>

            </div>

            <div className=' block lg:flex items-start gap-5 mt-10 lg:mt-3'>

              <img src="/news.png" className=' w-full h-full lg:w-[178px] lg:h-[178px] rounded-[16px]' alt="" />

              <div>
                <div className=' relative min-w-[240px] pl-8'>
                  <h1 className=' font-bold text-lg'>Travel News</h1>
                  <span className=' w-[20px] h-[5px] bg-primary rounded absolute top-[50%] -translate-y-[50%] left-0'></span>
                </div>

                <h1 className=' font-bold text-lg text-primary'>Travel Alerts and Disaster Updates</h1>

                <p className=' tracking-wide text-sm mt-1'>
                  Japan dropped all remaining COVID-related entry requirements (including the need of COVID testing/vaccination certificates) on April 29, 2023. With this, over three years of COVID-related border measures have come to an end.
                </p>

                <button className=' text-primary underline'>Read More</button>
              </div>

            </div>

            <div className=' block lg:flex items-start gap-5 mt-10 lg:mt-3'>

              <img src="/news.png" className=' w-full h-full lg:w-[178px] lg:h-[178px] rounded-[16px]' alt="" />

              <div>
                <div className=' relative min-w-[240px] pl-8'>
                  <h1 className=' font-bold text-lg'>Travel News</h1>
                  <span className=' w-[20px] h-[5px] bg-primary rounded absolute top-[50%] -translate-y-[50%] left-0'></span>
                </div>

                <h1 className=' font-bold text-lg text-primary'>Travel Alerts and Disaster Updates</h1>

                <p className=' tracking-wide text-sm mt-1'>
                  Japan dropped all remaining COVID-related entry requirements (including the need of COVID testing/vaccination certificates) on April 29, 2023. With this, over three years of COVID-related border measures have come to an end.
                </p>

                <button className=' text-primary underline'>Read More</button>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* End latest japan news */}

    </>
  )
}

export default App