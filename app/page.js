import React from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'
Foreground
const page = () => {
  return (
    <div className="w-full relative h-screen bg-zinc-600">
      <Background/>
      <Foreground />
    </div>
  )
}

export default page

