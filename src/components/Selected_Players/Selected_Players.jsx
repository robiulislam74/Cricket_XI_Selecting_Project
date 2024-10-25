import React from 'react'
import Footer from '../Footer/Footer'
import NewsLatter from '../NewsLatter/NewsLatter'
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer'

const Selected_Players = ({selectPlayers}) => {
  return (
    <>
    <div className='container mx-auto'>
    {
      selectPlayers.map(selectedPlayer => <SelectedPlayer 
        key={selectedPlayer.id} 
        selectedPlayer={selectedPlayer} 
        /> )
    }
    </div>

    {/* Footer part added here */}
    <div className='relative mt-60'><Footer/>
      <div className='absolute -top-40 w-full'><NewsLatter/></div>
    </div>
    </>
  )
}

export default Selected_Players
