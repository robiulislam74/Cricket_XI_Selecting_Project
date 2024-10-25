import { useState } from 'react'
import './App.css'
import Available from './components/Available/Available'
import Available_Players from './components/Available_Players/Available_Players'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Selected_Players from './components/Selected_Players/Selected_Players'

function App() {
  const [toggle,setToggle] = useState(true)

  const handleToggleButton = () =>{
    setToggle(!toggle)
  }

  return (
   <>
    <div className='container mx-auto'>
      <Navbar/>
      <Banner/>
      <Available 
      handleToggleButton={handleToggleButton}
      toggle={toggle}
      />
    </div>
    <div>
    {toggle
    ?
    <Available_Players/>
    :
    <Selected_Players/>
    }
  </div>
   </>
  )
}

export default App
