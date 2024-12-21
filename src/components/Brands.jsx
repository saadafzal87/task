import React from 'react'
import freshlyFoods from '../assets/freshly-foods.png'
import watties from '../assets/watties.png'
import lutosa from '../assets/lutosa.jpg'
import happyCow from '../assets/happy-cow.png'
import sutas from '../assets/sutas.jpg'
import fonterra from '../assets/fonterra.jpg'
import unilever from '../assets/unilever.png'
import leprino from '../assets/leprino.jpg'
import gourmet from '../assets/gourmet-foods.png'
import minstrel from '../assets/minstrel.png'
import compagna from '../assets/compagna.png'
import maestro from '../assets/maestro-foods.jpg'
import olam from '../assets/olam.png'
import ImageCard from './ImageCard';


const imageSources = [
  freshlyFoods,
  watties,
  lutosa,
  happyCow,
  sutas,
  fonterra,
  unilever,
  leprino,
  gourmet,
  minstrel,
  compagna,
  maestro,
  olam,
];

const Brands = () => {
  return (
    <section class="bg-[#EFF8FF] py-16 flex items-center justify-center">
      <div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-customBlue relative">
          Our Brands
          <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-20 h-1 bg-secondary"></span>
        </h2>{' '}
        <p class="text-lg text-lightGray mb-12 mt-4">
          Our way forward strategy is to work with more international brands and
          leverage our sales expertise and marketing skills in the market for
          the development of the brand & gain market share. Below are some of
          our brand partners in the Retail & Foodservices sectors.
        </p>
       <div class="grid grid-cols-3 sm:grid-cols-5 ">
      <ImageCard images={imageSources} />
      </div>

      </div>
    </section>
  )
}

export default Brands
