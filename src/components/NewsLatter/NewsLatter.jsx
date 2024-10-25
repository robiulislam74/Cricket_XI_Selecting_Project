import React from 'react'

const NewsLatter = () => {
  return (
    <div className='w-2/3 text-center mx-auto border-2 border-white rounded-3xl p-6 bg-[rgb(255,255,255,0.2)]'>
      <div className='space-y-4 bg-white border h-ful w-full py-16 rounded-3xl gap-y-6 bg-cover bg-no-repeat' style={{backgroundImage: 'url(https://i.ibb.co.com/1zkPMr0/bg-shadow.png)'}}>
        <h3 className='font-bold text-3xl text-black'>Subscribe to our Newsletter</h3>
        <p className='font-medium txt-2xl text-gray-500'>Get the latest updates and news right in your inbox!</p>
        <div className='pt-2 space-x-4'>
        <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
        <button className='btn bg-gradient-to-tr from-purple-500 to-yellow-300'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLatter
