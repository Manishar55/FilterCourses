
import {FcLike} from "react-icons/fc"
import React from 'react'

function Card({course}) {
  return (
    <div>
        <div>
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