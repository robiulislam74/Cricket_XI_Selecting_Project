import React from 'react'

const NewsLatter = () => {
  return (
    <div className='md:w-2/3 w-11/12 text-center mx-auto border-2 border-white rounded-3xl md:p-6 p-3 bg-[rgb(255,255,255,0.2)]'>
      <div className='space-y-4 md:p-0 p-3 bg-white border h-ful w-full md:py-16 py-5 rounded-3xl gap-y-6 bg-cover bg-no-repeat' style={{backgroundImage: 'url(https://i.ibb.co.com/1zkPMr0/bg-shadow.png)'}}>
        <h3 className='font-bold text-xl md:text-2xl lg:text-3xl text-black'>Subscribe to our Newsletter</h3>
        <p className='font-medium text-base lg:text-xl text-gray-500'>Get the latest updates and news right in your inbox!</p>
        <div className='pt-2 md:space-y-0 space-y-3 space-x-4'>
        <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
        <button className='btn bg-gradient-to-tr from-purple-500 to-yellow-300'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLatter
