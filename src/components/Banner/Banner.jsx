import React from 'react'
import bgShadow from '../../assets/images/bg-shadow.png'
import bannerImg from '../../assets/images/banner-main.png'

const Banner = ({handleClaimFreeCreditButton}) => {
  return (
    <>
    <div className='bg-gray-950 rounded-3xl mb-20'>
      <div className='text-center h-ful w-full py-16 rounded-3xl gap-y-6 bg-cover bg-no-repeat flex flex-col justify-center items-center'
       style={{backgroundImage: 'url(https://i.ibb.co.com/1zkPMr0/bg-shadow.png)'}}>
        <img className='md:w-auto w-32' src={bannerImg} alt="" />
        <h3 className='font-bold text-2xl md:text-3xl lg:text-4xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
        <p className='font-medium text-lg md:text-2xl text-gray-400'>Beyond Boundaries Beyond Limits</p>
        
        <div className='outline outline-2 outline-offset-2 outline-yellow-400 p-1 rounded-lg'>
        <button onClick={handleClaimFreeCreditButton} className='md:py-3 py-2 md:px-5 px-3 bg-yellow-400 rounded-lg font-bold text-black'>Claim Free Credit</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Banner
