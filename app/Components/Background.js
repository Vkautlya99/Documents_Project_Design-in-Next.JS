import React from 'react'

const Background = () => {
  return (
    <>
      <div className='w-full z-[2] h-screen fixed'>
        <div className=" top-[5%] w-full py-10 flex justify-center text-zinc-500 text-xl font-semibold">Documents.</div>
          <h1 className="text-[12vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  leading-none tracking-tighter font-semibold text-zinc-700">Docs</h1>
      </div>
      </>
      
  )
}

export default Background
