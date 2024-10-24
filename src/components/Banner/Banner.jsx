import React from 'react'
import bgShadow from '../../assets/images/bg-shadow.png'
import bannerImg from '../../assets/images/banner-main.png'

const Banner = () => {
  return (
    <>
    <div className='bg-gray-950 rounded-3xl mb-20'>
      {/* <img className='h-96 w-full rounded-3xl' src={bgShadow} alt="" /> */}
      <div className='h-ful w-full py-16 rounded-3xl gap-y-6 bg-cover bg-no-repeat flex flex-col justify-center items-center'
       style={{backgroundImage: 'url(https://i.ibb.co.com/1zkPMr0/bg-shadow.png)'}}>
        <img src={bannerImg} alt="" />
        <h3 className='font-bold text-4xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
        <p className='font-medium text-2xl text-gray-400'>Beyond Boundaries Beyond Limits</p>
        
        <div className='outline outline-2 outline-offset-2 outline-yellow-400 p-1 rounded-lg'>
        <button className='py-3 px-5 bg-yellow-400 rounded-lg font-bold text-black'>Claim Free Credit</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Banner
