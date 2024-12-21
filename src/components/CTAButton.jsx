import React from 'react'

const CTAButton = ({text,bgColor,textColor,borderColor,className}) => {
  return (
    <button className={`${bgColor} ${textColor} ${borderColor}  ${className} border-solid  border-2 text-xs md:text-sm px-4 md:px-8 py-2 md:py-3 w-full md:w-fit`}>
  {text}
     </button>
  )
}

export default CTAButton
