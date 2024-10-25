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
      return setSelectPlayers([...selectPlayers,player])
    }else{
      return alert("Not Available Your Coin!")
    }
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
    />
    }
  </div>
   </>
  )
}

export default App
