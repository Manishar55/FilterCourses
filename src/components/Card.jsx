
import {FcLike} from "react-icons/fc"
import React from 'react'

function Card({course}) {
  return (
    <div className="w-[300px] bg-blue-950/80 rounded-md overflow-hidden text-white">
        <div className="relative">
            <img src={course.image.url}></img>
            
            <div>
                <button>
                    <FcLike fontSize="1.75rem"/>
                </button>
            </div>
        </div>
        <div>
            <p>{course.title}</p>
            <p>{course.description}</p> 
        </div>
    </div>
  )
}

export default Card