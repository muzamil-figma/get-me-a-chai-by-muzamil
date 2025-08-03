import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white flex items-center justify-center px-4 h-16'>
       <p className="text-center">
  Copyright &copy; {currentYear} Get me A Chai With <span className="text-yellow-400 font-semibold">Muzamil Khan</span> - All rights reserved!
</p>
    </footer>
  )
}

export default Footer
