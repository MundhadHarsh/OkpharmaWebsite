import React from "react";

const stats = [
  { id: 2, name: 'Years of Experience', value: '20+' },
  { id: 1, name: 'Invoives processed ', value: '1 crore+' },
  { id: 3, name: 'users operate daily ', value: '2,000+' },
]

const Benefits = () => {
  return (
    <>
  


<div className="bg-white py-24 sm:py-32">
          <p className="mb-16 text-2xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
          Our achivements in pharmacy management
          </p>
      
<div className="mx-auto max-w-7xl px-6 lg:px-8">
  <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
    {stats.map((stat) => (
      <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className=" text-xl leading-7 text-gray-600">{stat.name}</dt>
        <dd className="order-first text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          {stat.value}
        </dd>
      </div>
    ))}
  </dl>
</div>
</div>
</>





  );
};

export default Benefits;
