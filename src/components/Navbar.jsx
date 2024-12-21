import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import CTAButton from './CTAButton'

const Navbar = () => {
  const [selected, setSelected] = useState('Home')
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (item) => {
    setSelected(item)
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img src={Logo} alt="Logo" width={100} height={100} />
          </div>

          <div className="hidden lg:flex items-center space-x-8 ml-auto">
            <a href="#suppliers" className="text-primary hover:text-blue-500">
              For Suppliers
            </a>
            <a href="#retailers" className="text-primary hover:text-blue-500">
              For Retailers
            </a>
            <a href="#location" className="text-primary hover:text-blue-500">
              Location
            </a>
            <CTAButton text="REQUEST A DEMO"  borderColor="border-secondary" textColor="text-secondary"  className="font-bold" />
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <ul className="lg:hidden flex flex-col space-y-4 mt-4 text-primary">
            <li>
              <a
                href="#suppliers"
                className="hover:text-blue-500"
                onClick={() => handleSelect('Suppliers')}
              >
                For Suppliers
              </a>
            </li>
            <li>
              <a
                href="#retailers"
                className="hover:text-blue-500"
                onClick={() => handleSelect('Retailers')}
              >
                For Retailers
              </a>
            </li>
            <li>
              <a
                href="#location"
                className="hover:text-blue-500"
                onClick={() => handleSelect('Location')}
              >
                Location
              </a>
            </li>
            <CTAButton text="REQUEST A DEMO" bgColor="bg-sky-400" textColor="text-secondary" />
          </ul>
        )}
      </nav>

      <hr className="border-gray-100 border-t-1 my-1" />

      <nav className="text-primary bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2">
          <ul className="hidden lg:flex space-x-8 text-lg">
            {[
              'Home',
              'About Us',
              'What We Do',
              'Brands',
              'News',
              'Careers',
              'Contact Us',
            ].map((item) => (
              <li key={item}>
                <a
                  className={`hover:text-primary ${
                    selected === item
                      ? 'font-bold border-b-2 border-secondary text-customBlue'
                      : ''
                  }`}
                  onClick={() => handleSelect(item)}
                  href={`#${item.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {isOpen && (
            <ul className="lg:hidden flex flex-col space-y-4 mt-4 text-primary">
              {[
                'Home',
                'About Us',
                'What We Do',
                'Brands',
                'News',
                'Careers',
                'Contact Us',
              ].map((item) => (
                <li key={item}>
                  <a
                    className={`hover:text-primary ${
                      selected === item
                        ? 'font-bold border-b-2  border-secondary text-customBlue'
                        : ''
                    }`}
                    onClick={() => handleSelect(item)}
                    href={`#${item.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
