import React from 'react'

const About = () => {
  return (
    <>
      <div className="flex-col my-4 border-l-8 p-8 w-1/8">
        <a href="/">
          <div className="flex-col relative justify-center h-1/4">
              <h1 className="text-8xl text-white font-bold damn hover:cursor-pointer">
                <span className="hover:font-outline-2 hover:text-black">
                T
                </span>
                <span className="hover:font-outline-2 hover:text-black">
                A
                </span>
                <span className="hover:font-outline-2 hover:text-black">
                S
                </span>
                <span className="hover:font-outline-2 hover:text-black">
                K
                </span>
                <br />
                <span className="hover:font-outline-2 hover:text-black">
                T
                </span>
                <span className="hover:font-outline-2 hover:text-black">
                R
                </span>
                <span className="hover:font-outline-2 hover:text-black">
                A
                </span>
                <span className="hover:font-outline-2 hover:text-black">
                C
                </span>
                <span className="hover:font-outline-2 hover:text-black">
                K
                </span>
                <span className="hover:font-outline-2 hover:text-black">
                E
                </span>
                <span className="hover:font-outline-2 hover:text-black">
                R
                </span>
              </h1>
          </div>
        </a>
        <div className="flex flex-col relative justify-end h-3/4">
          <div className="flex-col relative">
            <a href="/about">
              <div className="flex-col relative">
                <h1 className="flex align-center pl-4 py-1 text-white text-5xl damn hover:bg-white hover:font-bold hover:text-black hover:text:6xl">ABOUT</h1>
              </div>
            </a>
            <a href="/sign-up">
              <div className="flex-col relative">
                <h1 className="flex align-center pl-4 py-1 text-white text-5xl damn hover:bg-white hover:font-bold hover:text-black hover:text:6xl">SIGNUP</h1>
              </div>
            </a>
            <a href="/login">
              <div className="flex-col relative">
                <h1 className="flex align-center pl-4 py-1 text-white text-5xl damn hover:bg-white hover:font-bold hover:text-black hover:text:6xl">LOGIN</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center my-4 p-8 w-3/4">
        <div className="flex align-center mx-auto w-3/4 p-8">
          <h4 className="text-2xl text-center text-white damn">
            <span className="text-4xl font-semibold font-serif">Empower</span>  your workplace with the power of effective task management and generate maximum productivity. 
            An easy-to-use <span className="text-4xl font-semibold font-serif">free</span> of cost solution that offers effective team management.The tool helps in the division 
            of tasks into the measurable matrix. Thus, allowing an accountable, <span className="text-4xl font-semibold font-serif">efficient</span> and 
            <span className="text-4xl font-semibold font-serif">productive</span> work environment to thrive.
          </h4> 
        </div>
      </div>
    </>
  )
}

export default About
