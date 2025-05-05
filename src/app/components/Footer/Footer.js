import React from "react";
import {PlayIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <footer className="px-4 py-8  w-full bg-green">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
         
    


          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
           
            <li>
              <a>Terms of Use</a>
            </li>
            <li>
              <a>Privacy</a>
            </li>
          </ul>
        </div>


        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-4">

          <li className="flex flex-row space-x-2 ">
          <PhoneIcon  aria-hidden="true" className="h-6 w-6 mx-2" />
          7354290123
          </li>
          <li className="flex flex-row space-x-2 ">
          <EnvelopeIcon   aria-hidden="true" className="h-6 w-6 mx-2" />
          sales@okbooks.in
          </li> 
          <li className="flex flex-row space-x-2 hover:text-blue-400">          
          <PlayIcon   aria-hidden="true" className="h-6 w-6 mx-1 " />
          <a href="https://www.youtube.com/@okbooks471">Youtube</a>
          </li>
          <li className="flex flex-row space-x-2 hover:text-blue-400">
          <MapPinIcon    aria-hidden="true" className="h-6 w-6 mx-1" />
            <a href="https://maps.app.goo.gl/wE2vAxwqAPDn2ceg9">Nagpur, Maharashtra</a>
          </li>
        
        </ul>
        <ul>

          <li className="text-sm text-gray-500">© 2023 OkPharma. All rights reserved.</li>
          <li className="text-sm text-gray-500">Powered by OkBooks</li>
        </ul>
       
       
      </div>
      
    </footer>
  )
};

export default Footer;
