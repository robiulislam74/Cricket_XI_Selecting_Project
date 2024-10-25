import React, { useEffect, useState } from 'react'
import Player from '../Player/Player'
import NewsLatter from '../NewsLatter/NewsLatter'
import Footer from '../Footer/Footer'

const Available_Players = () => {
    const [players,setPlayers] = useState([])

    useEffect(()=>{
        fetch('Players_Data.json')
        .then(response => response.json())
        .then(data => setPlayers(data))
    },[])

  return (
    <>
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32 md:mb-72'>
      {
        players.map(player => <Player key={player.id} player={player}/> )
      }
    </div>

    <div className='relative'><Footer/>
    <div className='absolute -top-40 w-full'><NewsLatter/></div>
    </div>
   
    
    </>
  )
}

export default Available_Players
