import React from 'react'

const NewsCard = ({item}) => {
  return (
    <div key={item.id} className=" overflow-hidden bg-white">
    <img src={item.image} className="w-full h-48 object-cover" />
    <div className="p-5">
      <p className="text-secondary text-sm font-semibold mb-2">
        {item.category}
      </p>
      <h3 className="text-lg font-bold text-customBlue mb-2">
        {item.title}
      </h3>
      <p className="text-primary text-sm mb-4">{item.date}</p>
      <a
        href={item.link}
        className="text-secondary font-bold hover:underline"
      >
        READ MORE
      </a>
    </div>
    </div>
  )
}

export default NewsCard


