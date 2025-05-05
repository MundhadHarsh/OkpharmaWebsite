'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import {BellAlertIcon ,ShieldCheckIcon , QrCodeIcon,CheckIcon,
  ArrowPathIcon, BoltIcon , ArchiveBoxIcon , ArchiveBoxXMarkIcon   } from '@heroicons/react/24/outline'


  
  function Sales() {

    const [name, setname] = useState("");
    const [medicalName, setmedicalName] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");

    const features = [
      {
        name: 'Fast & Easy Billing',
        icon: BoltIcon ,
      },
      {
        name: 'Eliminate Overstocking',
        icon: ArchiveBoxXMarkIcon ,
      },  
      {
        name: 'Automatic Order Management',
        icon: ArrowPathIcon,
      },
      {
        name: 'Inventory and Accounting Management',
        icon: ArchiveBoxIcon ,
      },
      {
        name: 'Patient Management and Reminders',
        icon: BellAlertIcon ,
      },
      {
        name: 'GST Compliance and Reports',
        icon: ShieldCheckIcon,
      },
      {
        name: 'BarCode Billing',
        icon: QrCodeIcon,
      },
       {
        name: 'And many more features',
        icon: CheckIcon,
      },
      
    ]    

    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
          'name': 'James',
          'number': 'Number',
          'medicalName': 'medical_name'
      }
    
        console.log("services idd--",process.env.NEXT_PUBLIC_SERVICEID,"--template --", process.env.NEXT_PUBLIC_TEMPLATEID,"--templ --", templateParams,"PUBLICKEY",process.env.NEXT_PUBLIC_PUBLICKEY   )
        if (typeof form !== 'undefined') {
          if (el) {
            console.log('inside sendEmail',form.current )
        
          }
        }

      emailjs.sendForm( process.env.NEXT_PUBLIC_SERVICEID, 
        process.env.NEXT_PUBLIC_TEMPLATEID,
        refForm.current,
         {
        publicKey:process.env.NEXT_PUBLIC_PUBLICKEY
      } )
          .then((result) => {
              console.log(result.text);
              alert("Registered for demo !!")
          }, (error) => {
              console.log(error);
              alert("Error! please try again later !!")
          });
        };
        



  return (
    <div>
        
    <div  id="salesSection" className="isolate bg-emerald-700 text-white px-6 py-24 sm:py-32 lg:px-8 ">
    
      
      
        <h2 className="text-4xl text-center font-semibold tracking-tight text-balance  sm:text-5xl mb-8 ">Contact sales</h2>
      
      <div className="grid grid-cols-2 gap-2  justify-items-center">
          <div>
           <div className="text-4xl font-bold">
           India`&apos`s most <div className=' text-white bg-red-400 inline'> easy-to-use and accurate</div> pharmacy management software
            </div> 


            <ul className='mt-2'>
                {features.map((features) =>
                <li className='my-2 text-lg' key={features.name}>  
                <features.icon aria-hidden="true" className="h-6 w-6 my-2 mr-2 text-white inline" /> 
                {features.name}</li> )}
            </ul>

          </div>

          <div className='bg-white m-2 rounded-2xl w-md  p-2 pb-4 justify-self-center' >
            <p className="mt-2 text-lg text-center text-gray-600 ">Enter your details and we`&apos`ll call you back</p>
        
        
        
        
          <form action="#" ref={refForm} onSubmit={sendEmail} method="POST" className="mx-4 mt-4  sm:mt-8">
            <div className="grid grid-cols-1 gap-y-6 ">
              <div>
                <label htmlFor="name" className="block text-sm/6 font-semibold text-gray-900">
                Name
                </label>
                <div className="mt-2.5">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onClick={(e) => setname(e.target.value)}
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                  />
                </div>
              </div>
          
              <div className="sm:col-span-2">
                <label htmlFor="medicalName" className="block text-sm/6 font-semibold text-gray-900">
                  Pharmacy Name
                </label>
                <div className="mt-2.5">
                  <input
                    id="medicalName"
                    name="medicalName"
                    type="text"
                    onClick={(e) => setmedicalName(e.target.value)}
                    autoComplete="organization"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-emerald-600">
                
                    <input
                      id="phone-number"
                      name="phone-number"
                      type="text"
                      onClick={(e) => setphoneNumber(e.target.value)}
                      placeholder="123-456-7890"
                      className="block w-full  py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
    
            </div>
            <div className="mt-10">

              <button
                type="submit"
                className="block w-full rounded-md bg-rose-600 px-3.5 py-2.5 text-center text-sm font-semibold 
                text-white shadow-xs hover:bg-rose-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
              >
                Book your free demo
              </button>

            </div>
          </form>
          </div>
      </div>

    </div>
    </div>
  )
}

export default Sales