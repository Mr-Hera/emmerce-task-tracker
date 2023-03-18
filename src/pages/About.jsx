import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center my-4 p-8 w-3/4">
        <FontAwesomeIcon className="mt-12 mb-8" style={{ fontSize: 80, color: "white" }} icon={faInfoCircle} />
        <div className="flex align-center mx-auto w-3/4 p-8">
          <h4 className="text-2xl text-center text-white damn">
            <span className="text-4xl font-semibold font-serif">Empower</span>  your workplace with the power of effective task management and generate maximum productivity. 
            An easy-to-use <span className="text-4xl font-semibold font-serif">free</span> of cost solution that offers effective team management.The tool helps in the division 
            of tasks into the measurable matrix. Thus, allowing an accountable, <span className="text-4xl font-semibold font-serif">efficient</span> and 
            <span className="text-4xl font-semibold font-serif"> productive</span> work environment to thrive.
          </h4> 
        </div>
      </div>
    </>
  )
}

export default About
