import React, { useState } from 'react'

const SignUp = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState('')
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
                    <Link to="/about">
                        <div className="flex-col relative">
                            <h1 className="flex align-center pl-4 py-1 text-white text-5xl damn hover:bg-white hover:font-bold hover:text-black hover:text:6xl">ABOUT</h1>
                        </div>
                    </Link>
                    <Link to="/sign-up">
                        <div className="flex-col relative">
                            <h1 className="flex align-center pl-4 py-1 text-white text-5xl damn hover:bg-white hover:font-bold hover:text-black hover:text:6xl">SIGNUP</h1>
                        </div>
                    </Link>
                    <Link to="/login">
                        <div className="flex-col relative">
                            <h1 className="flex align-center pl-4 py-1 text-white text-5xl damn hover:bg-white hover:font-bold hover:text-black hover:text:6xl">LOGIN</h1>
                        </div>
                    </Link>
                </div>
                
            </div>
            
        </div>
        <div className="flex flex-col justify-center my-4 p-8 w-3/4">
            <div className="flex flex-col mt-40  justify-center align-center mx-auto w-3/4">
                <div className="border-b w-3/4 m-10 p-4">
                    <h4 className="text-center text-white font-semibold text-4xl damn">
                        SIGN UP HERE...
                    </h4>
                </div>
                <form className="flex flex-col w-3/4 m-10 ">
                    <div className="relative border-0 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                        <input
                            id="username"
                            name="username"
                            type="text"
                            className="peer bg-black text-2xl text-white border w-full p-4 placeholder-transparent transition duration-200"
                            placeholder="Username"
                        />
                        <label for="username" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-black text-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text">Username</label>
                    </div>
                    <div className="relative border-0 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        className="peer bg-black text-2xl text-white border w-full p-4 placeholder-transparent transition duration-200"
                        placeholder="Password"
                        />
                        <label for="password" className="absolute text-2xl font-semibold text-opacity-80 left-0.5 -top-2 bg-black text-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal mx-6 transition duration-200 input-text">Password</label>
                    </div>
                    <button
                        className="p-3 px-2 pt-2 text-white font-semibold md:bg-blue-800 md:w-full md:hover:bg-blue-700 sm:bg-blue-700"
                        type="submit"
                    >
                        SIGN UP
                    </button>
                    <div className="container mx-auto w-full m-5 p-3 border-spacing-4 bg-sky-500/5">
                        <p className="text-xl text-white text-center damn">
                        {" "}
                        By clicking on Sign Up, you accept our{" "}
                        <u>Subscriptions Agreement</u> and <u>Privacy Policy</u>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default SignUp
