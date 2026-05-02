import React from 'react'
import About from './components/About'

const page = () => {
  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-700 text-white">
        <div className="space-y-3 max-w-3xl"></div> 
        <h1 className="text-5xl font-semibold">Home page</h1>
        <p className="text-gray-300 font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat temporibus ea? Eum quo eaque maiores ex repudiandae nostrum odit.</p>
        <About/>
     </div>
    
  )
}

export default page