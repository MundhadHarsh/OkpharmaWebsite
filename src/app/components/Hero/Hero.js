'use client'
import React from 'react'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";

const navigation = [
  { name: 'Features', id: 'features' },
  { name: 'Testimonials', id: 'testimonials' },
]


  export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  

  function scrollTocomponent(component) {

    if (typeof window !== "undefined") {
      const el = document.getElementById(component);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }

  };

  


  return (
    <div className="bg-white">

      <header className="relative inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div  className="text-2xl font-bold text-emerald-600">
        OK
        </div>
  
          <div className="flex lg:flex-1 ">
            <a  className="-m-1.5 p-1.5">
              <span className="sr-only">Okpharma</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
              
            </a>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          
          <div className="hidden lg:flex  lg:gap-x-8 m-4 px-2">
            {navigation.map((item) => (
              <a key={item.name} 
              
              onClick={()=>scrollTocomponent(item.id)}

              className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>


          <button className=" bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full "
              onClick={()=>scrollTocomponent("salesSection")}
              >
            Book a free demo
          </button>

        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w sm:ring-1 sm:ring-gray-900/10 ">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">OkPharma</span>
                <Image
                  alt=""
                  src={'/OK.png'}
                  width="10"
                  height="10"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 border-4"
              >
                <span className="sr-only ">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>


            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      to={item.href}
                      onClick={()=>{setMobileMenuOpen(false);scrollTocomponent(item.id) }}

                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </div>
                  ))}
                    <button className="mt-4 bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full "
                    onClick={()=>{setMobileMenuOpen(false);scrollTocomponent("salesSection")}}>
            Book a free demo
          </button>
                </div>
               
               
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>



      <div className="relative isolate px-2 lg:px-8 mx-auto">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>





        
        <div className="mx-auto max-w-2xl py-16 lg:py-42 ">
          <div className="text-center">
          <div  className="text-2xl sm:text-4xl  text-emerald-600 mb-4">
        OkPharma

        </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Trusted Pharmacy Management Software
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Over 20+ years of experience in serving pharmacies
            </p>
            <div className="mt-10  text-white bg-emerald-500 px-4 py-2 w-fit text-xl font-medium sm:font-semibold  sm:text-2xl justify-self-center justify-center  border-2 hover:border-emerald-500 hover:bg-white hover:text-emerald-500 rounded-full shadow-sm  "
                          onClick={()=>scrollTocomponent("salesSection")}
>
              Book your free demo @ +91 7354290123
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}
