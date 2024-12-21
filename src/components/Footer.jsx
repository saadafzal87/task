import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import CTAButton from './CTAButton'

const Footer = () => {
  return (
    <footer className="bg-customBlue text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">
            Delivered on time with no hassle.
          </h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
          <p className="text-sm text-gray-300 mt-4">
            Copyright © 2023 - Assarain Food Products L.L.C. Design & Developed
            by Codevative
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-semibold mb-4">Keep Up To Date</h3>
          <div className="flex items-center space-x-8">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full md:w-2/3 px-4 py-2 text-black outline-none focus:ring-2 focus:ring-blue-500"
            />
            <CTAButton text="SIGN ME UP!" bgColor="bg-blue-500" textColor="text-white" className="hover:bg-blue-600 border-none " />
          </div>
          <div className="flex space-x-4 text-sm mt-4">
            <a href="#" className="hover:underline text-gray-300 ">
              Privacy
            </a>
            <span>/</span>
            <a href="#" className="hover:underline text-gray-300">
              Terms & Conditions
            </a>
            <span>/</span>
            <a href="#" className="hover:underline text-gray-300">
              Site map
            </a>
            <span>/</span>
            <a href="#" className="hover:underline text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
