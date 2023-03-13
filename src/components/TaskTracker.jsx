import React, { useState } from 'react'

const TaskTracker = () => {
    const [task, setTask] = useState("");
    const [date, setDate] = useState('');
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
        <div className="flex flex-col mt-4 border-l justify-start p-8 w-3/4">
            <div className="flex flex-col border justify-center items-center mx-auto w-3/4 p-8">
                <div className="border-b w-3/4 mx-10 p-4">
                    <h4 className="text-center text-white font-semibold text-4xl damn">
                        TASK TRACKER...
                    </h4>
                </div>
                <form className="flex flex-col w-3/4 m-10 ">
                    <div className="relative border-0 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                        <input
                            id="task"
                            name="task"
                            type="text"
                            className="peer bg-black text-2xl text-white border w-full p-4 placeholder-transparent transition duration-200"
                            placeholder="Task"
                        />
                        <label for="username" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-black text-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text">
                            Task
                        </label>
                    </div>
                    <div className="relative border-0 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                        <input
                            id="password"
                            name="password"
                            type="text"
                            className="peer bg-black text-2xl text-white border w-full p-4 placeholder-transparent transition duration-200"
                            placeholder="Date & Time"
                        />
                        <label for="password" className="absolute text-2xl font-semibold text-opacity-80 left-0.5 -top-2 bg-black text-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal mx-6 transition duration-200 input-text">
                            Date & Time
                        </label>
                    </div>
                    <button
                        className="p-3 px-2 pt-2 text-white font-semibold md:bg-blue-800 md:w-full md:hover:bg-blue-700 sm:bg-blue-700"
                        type="submit"
                    >
                        ADD TASK
                    </button>
                </form>
            </div>
            <div className="flex flex-col mt-10 justify-center items-center mx-auto w-3/4">
                <div className="flex w-full">
                    {/* first task item */}
                    <div className="border-dashed border-2 mx-4 p-4 w-1/2">
                        <div className="flex w-full py-2">
                            <div className="flex flex-col justify-start w-1/2">
                                <h4 className="text-start text-white font-semibold damn">
                                    Drifting Event @KICC
                                </h4>  
                            </div>
                            <div className="flex flex-col items-end w-1/2 hover:cursor-pointer">
                                <h4 className="text-start text-white font-semibold damn">
                                    X
                                </h4>  
                            </div>
                            
                        </div>
                        
                        <p className="text-start text-white damn">
                            12 March
                        </p>
                    </div>
                    {/* second task item */}
                    <div className="border-dashed border-2 mx-4 p-4 w-1/2">
                        <div className="flex w-full py-2">
                            <div className="flex flex-col justify-start w-1/2">
                                <h4 className="text-start text-white font-semibold damn">
                                    Drifting Event @KICC
                                </h4>  
                            </div>
                            <div className="flex flex-col items-end w-1/2 hover:cursor-pointer">
                                <h4 className="text-start text-white font-semibold damn">
                                    X
                                </h4>  
                            </div>
                            
                        </div>
                        
                        <p className="text-start text-white damn">
                            12 March
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default TaskTracker
