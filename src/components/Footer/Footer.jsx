import React from 'react'
import footerLogo from '../../assets/images/logo-footer.png'

const Footer = () => {
  return (
   <div>
     <div className='bg-gray-950 h-auto border-b border-gray-900 md:text-left text-left lg:p-0 p-8'>
      <div className='lg:pt-60 pt-40 container mx-auto'>
        <img className='mx-auto' src={footerLogo} alt="" />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-40 pt-10 md:pt-16 md:mb-16 mb-10 md:space-y-0 space-y-6'>
        <div>
            <h5 className='font-semibold text-lg text-white'>About Us</h5>
            <p className='text-gray-500 leading-relaxed md:pt-4 pt-2'>We are a passionate team dedicated to providing the best services to our customers.</p>
        </div>
        <div>
            <h1 className='font-semibold text-lg text-white'>Quick Links</h1>
            <ul className=' text-gray-500 leading-relaxed md:pt-4 pt-2 md:list-disc md:ml-4'>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <h5 className='font-semibold text-lg text-white'>Subscribe</h5>
            <p className='text-gray-500 leading-relaxed md:pt-4 pt-2'>Subscribe to our newsletter for the latest updates.</p>
            <div className='pt-2 space-x-4 relative'>
            <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
            <button className='absolute right-0
             btn rounded-l-none bg-gradient-to-tr from-purple-500 to-yellow-300'>Subscribe</button>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div className='py-8 text-center text-gray-500 bg-gray-950'>
    <p>@2024 Your Company All Rights Reserved.</p>
    </div>
   </div>
  )
}

export default Footer
