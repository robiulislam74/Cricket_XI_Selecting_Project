import React from 'react'

const Available = ({handleToggleButton,toggle,selectPlayers,maximumNumberOfSelect}) => {
  return (
    <div className='md:flex md:space-y-0 justify-items-center space-y-3 justify-between items-center mb-8'>
      <h4 className='font-bold text-2xl md:text-3xl text-black'>
        {toggle?"Available Players":`Selected Player (${selectPlayers.length}/${maximumNumberOfSelect})`}
        </h4>
      <div onClick={handleToggleButton} className='inline-block bg-gray-200 rounded-xl border border-gray-400'>
        <button className={`md:px-7 px-3 md:py-4 py-2 rounded-l-xl ${toggle?'font-bold bg-yellow-400':""}`}>Available</button>
        <button className={`md:px-7 px-3 md:py-4 py-2 rounded-r-xl ${!toggle?'font-bold bg-yellow-400':""}`}>Selected ({selectPlayers.length}) </button>
      </div>
    </div>
  )
}

export default Available
