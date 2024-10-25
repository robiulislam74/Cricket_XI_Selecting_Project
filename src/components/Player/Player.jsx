import React from 'react'
import { FaUserLarge } from "react-icons/fa6"
import { FaFlag } from "react-icons/fa"
import { FaDollarSign } from "react-icons/fa"


const Player = ({player,handleChoosePlayerButton}) => {
    const {name,country,image,role,batting_type,bowling_type,bidding_price,rating} = player
  return (
    <div className='p-6 border border-gray-200 rounded-2xl space-y-4'>
      <div className='h-56 w-full'>
        <img className='rounded-2xl h-56 w-full' src={image} alt="" />
      </div>
      <div className='flex gap-3 items-center'>
        <FaUserLarge className='text-xl font-bold'/>
        <p className='text-xl font-semibold'>{name}</p>
      </div>
      <div className='flex gap-3 items-center justify-between'>
        <div className='flex gap-3 text-gray-500 items-center'>
        <FaFlag />
        <span>{country}</span>
        </div>
        <button className="btn btn-sm">{role}</button>
      </div>
      <hr />
      <h4 className='font-bold'>Rating : <span className='font-normal ml-2'> {rating}</span></h4>
      <div className='flex justify-between items-center'>
        <p className='font-bold'>{batting_type}</p>
        <p>{bowling_type}</p>
      </div>
      <div className='flex justify-between items-center'>
        <p className='font-bold flex items-center'>Price: <FaDollarSign className='ml-2'/> {bidding_price}</p>
        <button onClick={()=> handleChoosePlayerButton(player)} className="px-4 py-2 rounded-lg hover:bg-yellow-400 duration-200 border border-gray-200">Choose Player</button>
      </div>
    </div>
  )
}

export default Player
