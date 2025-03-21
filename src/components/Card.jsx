
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import React from 'react'
import { toast } from "react-toastify";

function Card({course, likedCourses, setLikedCourses}) {

    function clickHandler(){

        if(likedCourses.includes(course.id)){
            //pehle se liked hai
            setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)));
            toast.warning("Like Removed");
        }else{
            //pehle se liked nhi hai, insert kar do liked courses me
            if(likedCourses.length===0){
                setLikedCourses([course.id])
            }
            else{
                setLikedCourses((prev)=>[...prev, course.id])
            }
            toast.success("Liked Successfully")
        }

    }
  return (
    <div className="w-[300px] bg-blue-950/80 rounded-md overflow-hidden ">
        <div className="relative">
            <img src={course.image.url}></img>
            
            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 top-37 grid place-items-center cursor-pointer">
                <button onClick={clickHandler} className="cursor-pointer">
                    {likedCourses.includes(course.id)? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)}
                    
                </button>
            </div>
        </div>
        <div className="p-4">
            <p className="text-white font-semibold text-lg loading-6 ">{course.title}</p>
            <p className="mt-2 text-white">
                {
                    course.description.length > 100 ? (course.description.substr(0, 100)):(course.description) 
                }
            </p> 
        </div>
    </div>
  )
}

export default Card