import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'
import { TbCoinFilled } from "react-icons/tb"
import { FaBars } from "react-icons/fa6";

const Navbar = ({freeMoney}) => {
  const [navbar,setNavbar] = useState(false)

  const handleNavbarBgChange = () => {
    window.scrollY >= 100 
    ?
    setNavbar(true)
    :
    setNavbar(false)
  }

  window.addEventListener('scroll',handleNavbarBgChange)
 

  return (
    <div className={`${navbar?"bg-slate-300/95 sticky top-0 duration-300":"sticky top-0"}`}>
      <div className='flex justify-between items-center md:py-6 py-4 mb-6 container mx-auto lg:px-0 px-5'>
        <div>
            <img className='md:w-auto w-14' src={logo} alt="" />
        </div>
        
        <div className='flex gap-x-12 items-center'>
            <ul className='hidden md:flex gap-x-12'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
            </ul>
            <div className='flex items-center md:gap-x-0 gap-x-3'>
            <div className={`flex items-center gap-x-2 md:px-5 px-3 md:py-4 py-3 border ${navbar?"border-gray-400":"border-gray-300"} rounded-2xl`}>
            <p className='font-semibold text-base md:text-lg'>{freeMoney} Coin</p>
            <TbCoinFilled className='text-2xl text-orange-500' />
            </div>
            <div className="dropdown dropdown-end">
              <FaBars tabIndex={0} role="button" className='text-2xl md:hidden flex'/>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Home</a></li>
                <li><a>Fixture</a></li>
                <li><a>Teams</a></li>
                <li><a>Schedules</a></li>
              </ul>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
