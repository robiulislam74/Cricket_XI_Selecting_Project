import React from 'react'
import Footer from '../Footer/Footer'
import NewsLatter from '../NewsLatter/NewsLatter'
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer'

const Selected_Players = ({selectPlayers,handleDeleteSelectedPlayer,handleToggleButton}) => {
  return (
    <>
    <div className='container mx-auto'>
    {
      selectPlayers.map(selectedPlayer => <SelectedPlayer 
        key={selectedPlayer.id} 
        selectedPlayer={selectedPlayer} 
        handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
        /> )
    }
    <div onClick={handleToggleButton} className='outline outline-2 outline-offset-2 outline-purple-400 p-1 rounded-lg inline-block'>
        <button className='py-3 px-5 bg-yellow-400 rounded-lg font-bold text-black'>Add More Player</button>
    </div>
    </div>
    

    {/* Footer part added here */}
    <div className='relative mt-60'><Footer/>
      <div className='absolute -top-40 w-full'><NewsLatter/></div>
    </div>
    </>
  )
}

export default Selected_Players
