
import {FcLike} from "react-icons/fc"
import React from 'react'

function Card({course}) {

    function clickHandler(){
        
    }
  return (
    <div className="w-[300px] bg-blue-950/80 rounded-md overflow-hidden ">
        <div className="relative">
            <img src={course.image.url}></img>
            
            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center ">
                <button onClick={clickHandler}>
                    <FcLike fontSize="1.75rem"/>
                </button>
            </div>
        </div>
        <div className="p-4">
            <p className="text-white font-semibold text-lg loading-6 ">{course.title}</p>
            <p className="mt-2 text-white">{course.description}</p> 
        </div>
    </div>
  )
}

export default Card