import React from 'react'

const Contact = () => {
  return (
<div className='lg:h-screen md:h-screen h-auto pt-20 flex flex-col items-center justify-center  p-4 '>
<div className='rounded-xl shadow-2xl'>
      <form action="" className='p-8 w-full max-w-lg '>
        <div className='items-center justify-center'>
          <h1 className='text-3xl text-center'>Contact with me</h1>
            <div className='shadow-2xl p-4 text-center text-xl rounded-full hover:scale-75'>
            <input type="text" name="" id="" placeholder='Name' className='bg-transparent w-full text-center ' />
            </div>
            <div className='rounded-full shadow-2xl p-4 text-center text-xl hover:scale-75'>
              <input type="text" name="" id="" placeholder='LastName' className='bg-transparent w-full text-center' />
            </div>
            <div className='rounded-full shadow-2xl p-4 text-center text-xl hover:scale-75'>
            <input type="tel" name="" id="" placeholder='Phone' className='bg-transparent w-full text-center' />
            </div>
            <div className='rounded-full shadow-2xl p-4 text-center text-xl hover:scale-75'>
            <input type="email" name="" id="" placeholder='Email' className='bg-transparent w-full text-center' />
            </div>
            <div className='rounded-full shadow-2xl p-4 text-center text-xl hover:scale-75'>
            <textarea type="box" name="" id="" placeholder='Observation' className='bg-transparent w-full text-center' />
            </div>
          <div className='text-2xl text-center p-4 shadow-2xl rounded-full bg-slate-500 hover:scale-100'>
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Contact