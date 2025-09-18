import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer id="footer" className="py-5 sm:px-10 px-5 clear-both">
  <div className="screen-max-width">
    <div>
      <p className="font-semibold text-gray text-xs">
        More ways to Contribute:{' '}
        <a href="https://forms.gle/CwSMa81S3iAhXUPv6" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline text-blue hover:text-blue-600 transition-colors">
          Get a Role
        </a>
        {' '}or{' '}
        <a href="https://forms.gle/CwSMa81S3iAhXUPv6" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline text-blue hover:text-blue-600 transition-colors">
          Make a project
        </a>
        {' '}near you.
      </p>
      <p className="font-semibold text-gray text-xs">
        Or call 479-900-4748
      </p>
    </div>
  </div>

  {/* 🔧 Move this outside the max-width container */}
  <div className="bg-neutral-700 my-5 h-[1px] w-full" />

  <div className="screen-max-width">
    <div className="flex md:flex-row flex-col md:items-center justify-between">
      <p className="font-semibold text-gray text-xs">
        Copyright © 2025 Arenda. Designed by:{' '}
        <a 
          href="https://github.com/nischalkeshav" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline text-blue hover:text-blue-600 transition-colors"
        >
          Nischal Keshav
        </a>
      </p>
      
    </div>
  </div>
</footer>
  )
}

export default Footer