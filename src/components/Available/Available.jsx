import React from 'react'

const Available = ({handleToggleButton,toggle}) => {
  return (
    <div className='flex justify-between items-center mb-8'>
      <h4 className='font-bold text-3xl text-black'>Available Pla yers</h4>
      <div onClick={handleToggleButton} className='bg-gray-200 rounded-xl border border-gray-400'>
        <button className={`px-7 py-4 rounded-l-xl ${toggle?'font-bold bg-yellow-400':""}`}>Available</button>
        <button className={`px-7 py-4 rounded-r-xl ${!toggle?'font-bold bg-yellow-400':""}`}>Selected (0) </button>
      </div>
    </div>
  )
}

export default Available
