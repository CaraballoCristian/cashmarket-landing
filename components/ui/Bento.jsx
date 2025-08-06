import React from 'react'

const Bento = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center '>
      <div className='grid h-full w-full  grid-cols-6 grid-rows-4 gap-3 p-20 xl:m-64 lg:m-32 md:m-16'>
        <div className='col-span-3 row-span-2 rounded-xl border border-b-amber-800'></div>
        <div className='col-span-3 row-span-2 rounded-xl border border-b-amber-800'></div>
        <div className='col-span-2 row-span-2 rounded-xl border border-b-amber-800'></div>
        <div className='col-span-4 row-span-2 rounded-xl border border-b-amber-800'></div>
      </div>
    </div>
  )
}

export default Bento