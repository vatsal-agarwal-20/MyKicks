import React from 'react'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  
  return (
   <>
      <footer className='bg-theme mt-10 pt-2 pb-5 text-slate-200'>
          <div className='mt-5 text-center'>
            <p className='flex justify-center text-sm md:text-center'>Copyright<sup className='text-base font-bold'>&copy;</sup> All Reserved Rights <span className='font-semibold'>Vatsal Agarwal &emsp;</span><a href='https://github.com/vatsal-agarwal-20/MyKicks' target="_blank"><AiFillGithub size={20}/></a></p>
          </div>
      </footer>
   </>
  )
}

export default Footer