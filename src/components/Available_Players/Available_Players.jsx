import React, { useEffect, useState } from 'react'
import Player from '../Player/Player'

const Available_Players = () => {
    const [players,setPlayers] = useState([])

    useEffect(()=>{
        fetch('Players_Data.json')
        .then(response => response.json())
        .then(data => setPlayers(data))
    },[])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32 md:mb-52'>
      {
        players.map(player => <Player key={player.id} player={player}/> )
      }
    </div>
  )
}

export default Available_Players
