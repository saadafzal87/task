import React from 'react'
import CTAButton from './CTAButton'

const JoinOurTeam = () => {
  return (
    <section className="bg-blue-50 py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-customBlue relative">
          Join Our Team
          <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-20 h-1 bg-secondary"></span>
        </h2>

        <p className="text-lightGray2 text-sm md:text-base leading-relaxed mb-6 mt-4">
          We offer attractive prospects for fresh graduates as well as for
          experienced professionals to be part of a fast-growing, progressive
          organization. You will have the opportunity to work with our
          multinational business partners and gain the opportunity to work with
          some of the best brands in the world and gain the latest know-how in
          the FMCG business.
        </p>

        <p className="text-lightGray2 text-sm md:text-base leading-relaxed mb-8">
          We are looking to recruit talented individuals to join our workforce.
          If you are highly motivated, goal-oriented and thrive on challenges,
          do get in touch with us.
        </p>
        <CTAButton text="APPLY NOW" bgColor="bg-blue-900" textColor="text-white" className="hover:bg-blue-700 transition duration-300" />
      </div>
    </section>
  )
}

export default JoinOurTeam
