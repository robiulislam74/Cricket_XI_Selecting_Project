import { useState } from 'react'
import './App.css'
import Available from './components/Available/Available'
import Available_Players from './components/Available_Players/Available_Players'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Selected_Players from './components/Selected_Players/Selected_Players'

function App() {
  const [toggle,setToggle] = useState(true)
  const [freeMoney,setFreeMoney] = useState(0)
  const [selectPlayers,setSelectPlayers] = useState([])
  const [maximumNumberOfSelect,setMaximumNumberOfSelect] = useState(6)

  const handleToggleButton = () =>{
    setToggle(!toggle)
  }

  const handleClaimFreeCreditButton = () =>{
    setFreeMoney(freeMoney + 300000)
  }


  const handleChoosePlayerButton = (player) =>{
    const {bidding_price} = player
    if(freeMoney>=bidding_price){
      setFreeMoney(freeMoney - bidding_price)
      if(selectPlayers.length >= maximumNumberOfSelect){
      return alert("Warning! You can maximum 6 players select.")
      }else{
        const isExist = selectPlayers.find(selectPlayer => selectPlayer.id === player.id)
        isExist
        ?
        alert("Warning! Player already Selected.")
        :
        setSelectPlayers([...selectPlayers,player])
      }
      
    }else{
      return alert("Not Available Your Coin!")
    }
  }

  const handleDeleteSelectedPlayer = (deletePlayer) =>{
    const deletedPlayer = selectPlayers.filter(selectPlayer => selectPlayer.id !== deletePlayer.id)
    setSelectPlayers(deletedPlayer)
  }

  return (
   <>
    <div className='container mx-auto'>
      <Navbar 
      freeMoney={freeMoney}
      />
      <Banner
      handleClaimFreeCreditButton={handleClaimFreeCreditButton}
      />
      <Available 
      handleToggleButton={handleToggleButton}
      toggle={toggle}
      selectPlayers={selectPlayers}
      maximumNumberOfSelect={maximumNumberOfSelect}
      />
    </div>
    <div>
    {toggle
    ?
    <Available_Players
    handleChoosePlayerButton={handleChoosePlayerButton}
    />
    :
    <Selected_Players
    selectPlayers={selectPlayers}
    handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
    />
    }
  </div>
   </>
  )
}

export default App
