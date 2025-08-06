import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer id="footer" className="py-5 sm:px-10 px-5">
  <div className="screen-max-width">
    <div>
      <p className="font-semibold text-gray text-xs">
        More ways to Contribute:{' '}
        <span className="underline text-blue">Get a Role </span>
        or{' '}
        <span className="underline text-blue">Make a project</span>{' '}
        near you.
      </p>
      <p className="font-semibold text-gray text-xs">
        Or call 123-456-7890
      </p>
    </div>
  </div>

  {/* 🔧 Move this outside the max-width container */}
  <div className="bg-neutral-700 my-5 h-[1px] w-full" />

  <div className="screen-max-width">
    <div className="flex md:flex-row flex-col md:items-center justify-between">
      <p className="font-semibold text-gray text-xs">
        Copyright © 2025 Arenda. All rights reserved.
      </p>
      <div className="flex flex-wrap">
        {footerLinks.map((link, i) => (
          <p key={link} className="font-semibold text-gray text-xs">
            {link}
            {i !== footerLinks.length - 1 && <span className="mx-2">|</span>}
          </p>
        ))}
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer