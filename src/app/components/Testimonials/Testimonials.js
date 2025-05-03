'use client'
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section id='testimonials' className="testimonials">
   
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
    <p className="mt-2 text-3xl font-bold lg:text-center tracking-tight text-gray-900 sm:text-4xl ">
          Lets hear from our customers
          </p>
          <div className="mx-auto max-w-2xl lg:max-w-7xl ">
        
            <figure className=" mt-10 flex flex-row justify-center items-center   ">
              <blockquote className=" text-left text-lg font-medium text-gray-900 sm:text-2xl/9 mx-4">
                <p>
                “OkPharma has significantly simplified our inventory management and billing process. 
                The software is user-friendly, efficient, and well-optimized for handling medical stock with accuracy ”
                </p>
                <div className=" mt-4 flex flex-col font-semibold justify-left space-x-3 text-base">
                  <div className=" text-lg text-gray-900">Ashish Bhayiya, </div>
                  <div className="text-gray-600">Propritier Mann Medical, Nagpur   </div>
                </div>
              </blockquote>
              <figcaption className="mt-10  rounded-xl w-full  p-4 ">
                <Image src={`/Maanmedicals.jpg`} alt={'Maan Medical'} width="400" height="400" className="rounded-md"/>
               
               
                
              </figcaption>
            </figure>

            <figure className=" mt-10 flex flex-row justify-center items-center   ">
              <blockquote className=" text-left text-lg font-medium text-gray-900 sm:text-2xl/9 mx-4">
                <p>“Thanks to OKPharma, we’ve completely eliminated overstocking and improved our inventory accuracy
                We’ve noticed a major reduction in errors and an improvement in overall workflow”
                </p>
                <div className=" mt-4 flex flex-col font-semibold justify-left space-x-3 text-base">
                  <div className=" text-lg text-gray-900">Ashish Bhayiya, </div>
                  <div className="text-gray-600">Propritier Apex Medical, Nagpur   </div>
                </div>
              </blockquote>
              <figcaption className="mt-10  rounded-xl w-full  p-4 ">
                <Image src={`/Apexmedical.jpg`} alt={'Maan Medical'} width="400" height="400" className="rounded-md" />
               
               
                
              </figcaption>
            </figure>
          </div>
    </section>

    </section>
  );
};

export default Testimonials;
