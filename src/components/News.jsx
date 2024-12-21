import React from 'react'
import person from '../assets/person.png'
import vegetables from '../assets/veg.png'
import meal from '../assets/meal.png'
import NewsCard from './NewsCard'

const FeaturedNews = () => {
  const newsItems = [
    {
      id: 1,
      image: vegetables,
      category: 'Insights',
      title:
        'The Art of Sourcing: How We Find the Freshest Ingredients for You',
      date: 'September 20, 2023',
      link: '#',
    },
    {
      id: 2,
      image: person,
      category: 'Insights',
      title:
        'Food Safety Matters: Our Rigorous Standards for Quality Assurance',
      date: 'September 20, 2023',
      link: '#',
    },
    {
      id: 3,
      image: meal,
      category: 'Insights',
      title:
        'Healthy Eating Made Easy: Tips for a Balanced Diet with Our Products',
      date: 'September 20, 2023',
      link: '#',
    },
  ]

  return (
    <div className="bg-white py-20 px-5 md:px-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-customBlue relative">
          Featured Assarain News
          <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-20 h-1 bg-secondary"></span>
        </h2>
        <p className="text-lightGray2 mt-4 max-w-3xl mx-auto">
          We offer attractive prospects for fresh graduates as well as for
          experienced professionals to be part of a fast-growing, progressive
          organization. You will have the opportunity to work with our
          multinational business partners and gain the latest know-how in the
          FMCG business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((item) => (
         <NewsCard item={item} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedNews
