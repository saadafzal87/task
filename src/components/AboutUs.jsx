import React from 'react'
import StatisticsCard from './StatisticsCard'; 

const statisticsData = [
  {
    number: '200+',
    title: 'Global Brands',
    description: 'We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat.',
  },
  {
    number: '20+',
    title: 'Warehouses',
    description: 'We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat.',
  },
  {
    number: '85,000+',
    title: 'Pallet Capacity',
    description: 'We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat.',
  },
  {
    number: '300+',
    title: 'Own Vehicles',
    description: 'We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat.',
  },
  {
    number: '1000+',
    title: 'Skilled Employees',
    description: 'We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat.',
  },
  {
    number: 'Omni',
    title: 'Channel Coverage',
    description: 'We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat.',
  },
];


const AboutUs = () => {
  return (
    <section className="py-16 bg-white text-gray-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-customBlue relative">
            About Us
            <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500"></span>
          </h2>{' '}
          <p className="text-lightGray2 leading-relaxed max-w-3xl mx-auto mt-4">
            In acknowledgement of the basic premise that good food leads to good
            health and well-being, Assarain Food Products LLC, occupies a place
            of pride among the market leaders in the Omani industry of Fast
            Moving Consumer Goods (FMCG), founded on a reputation built over
            four decades of excellence in food products and operations. Setting
            high benchmarks for other local competitors, we are the first FMCG
            sales and distribution company to acquire ISO 22000:2005
            Certification for Food Safety Management Systems within the
            Sultanate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12  text-center">
        {statisticsData.map((stat, index) => (
        <StatisticsCard
          key={index}
          number={stat.number}
          title={stat.title}
          description={stat.description}
        />
      ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs


        
       