import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";


const SelectedPlayer = ({selectedPlayer}) => {
    const {name,image,batting_type} = selectedPlayer
  return (
    <div className='mb-6'>
      <div className='flex items-center justify-between p-6 border rounded-2xl'>
        <div className='flex items-center gap-x-6'>
            <div className='w-20 h-20 bg-cover bg-center rounded-2xl'  
            style={{backgroundImage: `url(${image})`}}></div>
            <div className='space-y-3'>
                <h4 className='text-2xl font-semibold'>{name}</h4>
                <p>{batting_type}</p>
            </div>
        </div>
        <div>
            <RiDeleteBin6Line className='text-2xl text-red-500'/>
        </div>
      </div>
    </div>
  )
}

export default SelectedPlayer
