import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="space-y-3 max-w-3xl">
        <h1 className="text-5xl font-semibold">Contact Us</h1>
        <p className="text-white">Get Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur nemo necessitatibus enim tempora, voluptatibus architecto molestias unde ea velit? in touch with us. We'd love to hear from you!</p>
        <div className='flex flex-col border '>
            <input type="Name" placeholder="Enter your name" className='text-3xl shadow-2xl bg-gray-600 text-white placeholder:text-gray-400 ' />
            <input type="Email" placeholder="Enter your email" className='text-3xl shadow-2xl bg-gray-600 text-white placeholder:text-gray-400 ' />
            <input type="Password" placeholder="Enter your password" className='text-3xl shadow-2xl bg-gray-600 text-white placeholder:text-gray-400 ' />
            <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page