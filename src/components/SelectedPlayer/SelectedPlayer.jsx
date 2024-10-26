import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaDollarSign } from "react-icons/fa"


const SelectedPlayer = ({selectedPlayer,handleDeleteSelectedPlayer}) => {
    const {name,image,role,bidding_price} = selectedPlayer
  return (
    <div className='mb-6'>
      <div className='flex md:items-center justify-between p-6 border rounded-2xl'>
        <div className='md:flex space-y-3 md:space-y-0 items-center gap-x-6'>
            <div className='w-24 h-24 bg-cover bg-center rounded-2xl'  
            style={{backgroundImage: `url(${image})`}}></div>
            <div className='space-y-1'>
                <h4 className='md:text-2xl text-xl font-semibold'>{name}</h4>
                <p>{role}</p>
                <p className='font-semibold flex items-center'>Price :<FaDollarSign className='ml-1'/> {bidding_price}</p>
            </div>
        </div>
        <div>
            <RiDeleteBin6Line onClick={()=>handleDeleteSelectedPlayer(selectedPlayer)} className='text-2xl text-red-500 hover:text-red-300 duration-300'/>
        </div>
      </div>
    </div>
  )
}

export default SelectedPlayer
