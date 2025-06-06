import React from "react";


import {BellAlertIcon ,ShieldCheckIcon , QrCodeIcon,ArchiveBoxIcon,ChartBarSquareIcon,DocumentArrowUpIcon,DocumentArrowDownIcon ,ArrowRightStartOnRectangleIcon , 
  ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon,BookOpenIcon, ClipboardDocumentCheckIcon, DocumentDuplicateIcon   } from '@heroicons/react/24/outline'

  import Image from 'next/image'


const features =[
  
  {
    name: 'Fast & Easy Billing',
    description:
      'Create professional invoices in seconds with a simple, intuitive billing interface. Reduce manual errors and save time through automated tax and discount calculations.',
    imgAddress: '/5fastbilling.svg',
    index: 5,
  },
  {
    name: 'Eliminate Overstocking',
    description:
      'Avoid excess inventory with smart stock level controls. Analyze sales trends, set automatic reorder points, and receive timely alerts to keep stock optimized and reduce wastage.',
    icon: LockClosedIcon,
    imgAddress: '/6overstock.jpg',
    index: 6,
  },
  {
    name: 'Automatic Order Management',
    description:
      'Streamline purchasing with auto-generated purchase orders and real-time stock tracking. Improve coordination between suppliers and inventory teams with minimal manual effort.',
    icon: ArrowPathIcon,
    imgAddress: '/7autoorder.jpg',
    index: 7,
  },
  {
    name: 'Account and Ledger Management',
    description:
      'Track inventory across your business in real time and maintain clean ledgers. Monitor stock movements, categorize items, and ensure financial accuracy with minimal effort.',
    icon: ArchiveBoxIcon,
    imgAddress: '/8inventory.png',
    index: 8,
  },
  {
    name: 'Granular Level Access Control',
    description:
      'Assign role-based access to employees based on bill timings and responsibilities. Enhance security and accountability by restricting sensitive actions to authorized users only.',
    icon: LockClosedIcon,
    imgAddress: '/9granularAccess.png',
    index: 9,
  },
  {
    name: 'GST Compliance',
    description:
      'Automate GST calculations and ensure timely return filings with confidence. Stay compliant with government regulations and avoid penalties through built-in tax handling.',
    icon: ShieldCheckIcon,
    imgAddress: '/10gst.png',
    index: 10,
  },
  {
    name: 'Comprehensive Reports',
    description:
      'Generate detailed reports on sales, purchases, stock, profit margins, and more. Gain business insights quickly with a few clicks and make data-driven decisions easily.',
    icon: ChartBarSquareIcon,
    imgAddress: '/11compreports.png',
    index: 11,
  },
  {
    name: 'Expiry and Batch Tracking',
    description:
      'Get timely alerts for near-expiry and expired products to minimize losses. Track medicines by batch and expiry to ensure safe and efficient dispensing.',
    icon: ClipboardDocumentCheckIcon,
    imgAddress: '/12expiry.png',
    index: 12,
  },
  {
    name: 'Export Data to Tally',
    description:
      'Easily export your inventory and billing data to Tally for seamless accounting. Save time and reduce manual data entry with one-click data synchronization.',
    icon: ArrowRightStartOnRectangleIcon,
    imgAddress: '/13_tally.jpg',
    index: 13,
  },
  {
    name: 'Import Purchase Orders',
    description:
      'Import supplier orders directly from email attachments or CSV files. Automate data entry and maintain accurate purchase records with minimal manual work.',
    icon: DocumentArrowDownIcon,
    imgAddress: '/14importOrder.png',
    index: 14,
  },
  {
    name: 'BarCode Billing',
    description:
      'Easily generate and print barcodes for all your products. Speed up billing and improve accuracy by scanning barcodes instead of manual item entry.',
    icon: QrCodeIcon,
    imgAddress: '/15barcode.png',
    index: 15,
  },
  {
    name: 'Multi-Minize Billing',
    description:
      'Switch between multiple bills for different patients simultaneously without losing data. Perfect for busy counters where multitasking is essential for speed.',
    icon: DocumentDuplicateIcon,
    imgAddress: '/16multiplebill.png',
    index: 16,
  }


]

const featuresAtGlance = [
  {
    name: 'Patient Management and Reminders',
    description:
      'Generate invoices quickly with an intuitive billing system.',
    icon: BellAlertIcon ,
  },
  {
    name: 'Inventory Management',
    description:
      'Optimize inventory levels and reduce wastage efficiently.',
    icon: ArchiveBoxIcon ,
  },
  {
    name: 'Granular level access control',
    description:
      'Give access to employees based on timings of bill creation .',
    icon: LockClosedIcon,
  },
  
  {
    name: 'GST Compliance and Reports',
    description:
      'Streamline purchase orders and stock replenishment.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Comprehensive Reports',
    description:
      'Get deatiled reports on sales, purchase, stock, and more with few clicks.',
    icon: ChartBarSquareIcon ,
  },
  {
    name: 'Accounting Management',
    description:
      'Manage ledgers and patients accounts.',
    icon: BookOpenIcon ,
  },
  {
    name: 'Expiry and Batch Tracking',
    description:
      'get alerts for near expiry and expired products.',
    icon: ClipboardDocumentCheckIcon ,
  },
  {
    name: 'Export data to tally',
    description:
    'Export data to tally seamlessly in one place',
    icon: ArrowRightStartOnRectangleIcon  , 
  },
  
  
  {
    name: 'Import purchase orders',
    description:
      'Track inventory and finances seamlessly in one place',
       icon: DocumentArrowDownIcon , 
  },
  {
    name: 'Customisable invoices',
    description:
    'Fully customisable GST & non - GST invoices with your logos',
    icon: FingerPrintIcon, 
  },
  {
    name: 'BarCode Billing',
    description:
      'easily create barcodes for products and scan them for billing.',
    icon: QrCodeIcon,
  },
  
  {
    name: 'Multi-Minize Billing',
    description:
    'Alternating between multiple bills for differnt patients at the same time',
    icon: DocumentDuplicateIcon   , 
  },
]

const Features = () => {
  return (

    <div className=''>
<div id='features' className="mx-auto max-w-2xl lg:text-center pt-16">
          <p className="mt-2 text-2xl text-center self-center font-bold tracking-tight text-gray-900 sm:text-4xl">
          Features at a glance
          </p>
        </div>

<div  className=" py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

          <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">



            {featuresAtGlance.map((featuresAtGlance) => (

            
            <div key={featuresAtGlance.name}  className="px-12 text-center sm:px-0" >
                  <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-emerald-600  sm:w-12 sm:h-12">
                  <featuresAtGlance.icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                  <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">{featuresAtGlance.name}</h6>
                  <div className="mb-2 text-gray-400">
                  {featuresAtGlance.description}
                  </div>
          </div>

            ))}







          </div>
        </div>



        <div className="bg-white py-24 sm:py-32">
        <p className="mt-2 text-2xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl p-4 sm:p-16">
          Why OkPharma is the best for your pharmacy management?
          </p>
        <dl className="grid max-w-xl grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-1 ">
            {features.map((feature) => (
              <div
                key={feature.name + feature.index}
                className={`relative flex flex-wrap sm:flex-nowrap items-center sm:gap-4 sm:px-38 sm:justify-between rounded-lg
                ${
                  feature.index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } `}
              >
                <dt className="flex flex-col items-center justify-center px-10 ">
                  <div className="flex  items-center justify-center rounded-lg bg-emerald-600 sm:w-max sm:h-max ">
                  <Image src={`${feature.imgAddress}`} alt={feature.name} width="200" height="200" />
                  </div>
                </dt>

                <dd className={`  p-2 
                ${ feature.index % 2 === 0 ? 'sm:mr-10' : 'sm:ml-10' } 
                `}>
                  <div className=" text-xl sm:text-2xl  font-bold leading-7 my-2 text-center sm:text-left text-gray-900">
                    {feature.name}
                  </div>
                  <div className="mt-2 text-sm sm:text-base  leading-7 text-center sm:text-left text-gray-600">
                    {feature.description}
                  </div>
                </dd>


              </div>
            ))}
        </dl>
        </div >


    </div>


  );
};

export default Features;
