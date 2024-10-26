import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
    setFreeMoney(freeMoney + 600000)
  }


  const handleChoosePlayerButton = (player) =>{
    const {bidding_price} = player
    if(freeMoney>=bidding_price){
      setFreeMoney(freeMoney - bidding_price)
      if(selectPlayers.length >= maximumNumberOfSelect){
        toast.error("Warning! You can maximum 6 players select.", {
          position: "top-center"
        })
      }else{
        const isExist = selectPlayers.find(selectPlayer => selectPlayer.id === player.id)
        isExist
        ?
        toast.error(`Warning! ${player.name} already selected`, {
          position: "top-center"
        })
        :
        toast.success(`Congratulations! ${player.name} is now in your Squad`, {
          position: "top-center"
        })
        setSelectPlayers([...selectPlayers,player])
      }
      
    }else{
     return toast.error("Not Available Your Coin!", {
        position: "top-center"
      });
    }
  }

  const handleDeleteSelectedPlayer = (deletePlayer) =>{
    const deletedPlayer = selectPlayers.filter(selectPlayer => selectPlayer.id !== deletePlayer.id)
    setSelectPlayers(deletedPlayer)
    toast.warning(`${deletePlayer.name} removed from in your squad`)
  }


  return (
   <>
    <Navbar 
      freeMoney={freeMoney}
      />
    <div className='container mx-auto lg:px-0 px-5'>
    <div>
    <ToastContainer/>
    </div>
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
    handleToggleButton={handleToggleButton}
    selectPlayers={selectPlayers}
    handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
    />
    }
  </div>
   </>
  )
}

export default App
