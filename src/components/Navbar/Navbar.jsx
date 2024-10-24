import React from 'react'
import logo from '../../assets/images/logo.png'
import { TbCoinFilled } from "react-icons/tb"

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between items-center pt-12 pb-6'>
        <div>
            <img src={logo} alt="" />
        </div>
        <div className='flex gap-x-12 items-center'>
            <ul className='flex gap-x-12'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
            </ul>
            <div className='flex items-center gap-x-2 px-5 py-4 border border-gray-300 rounded-2xl'>
            <p className='font-semibold text-lg'>0 Coin</p>
            <TbCoinFilled className='text-2xl text-orange-600' />
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
