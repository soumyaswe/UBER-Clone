import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1624724126923-e2c021df1311?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen w-full pt-8 flex justify-between flex-col'>
            <img className='w-14 ml-6' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white py-4 px-4'>
                <h2 className='font-bold text-2xl'>Get Started With Uber</h2>
                <Link to="/login" className='flex items-center justify-center bg-black text-white py-3 mt-2 rounded-md w-full text-xl'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home