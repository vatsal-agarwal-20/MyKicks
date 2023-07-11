import React from 'react'
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {setClearCartItems} from '../app/CartSlice'

const CheckoutSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    dispatch(setClearCartItems());
    navigate("/");
  }
  return (
    <div>
      <nav className='flex items-center bg-slate-900 justify-between'>
            <div className='flex items-center'>
                <img
                    src={logo}
                    alt="logo/img"
                    className= 'w-24 h-auto p-5'
                />
            </div>
            <div className='mr-5'>
            <button onClick={(e) => handleClick(e)} type='button' className='button-theme bg-slate-900 shadow-slate-900 text-slate-100 p-2'>Back To Home</button>
            </div>
      </nav>
      <h2 className='text-black mt-5 font-bold text-lg text-center'>Checkout Success</h2>
    </div>
  )
}

export default CheckoutSuccess