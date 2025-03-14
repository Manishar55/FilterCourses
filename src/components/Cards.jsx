
import React from 'react'


function Cards({courses}) {

    //it returns list of all the courses
    let allCourses=[];
    const getCourses=()=>{
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })
        return allCourses;
    }
  return (
    <div>
        {getCourses().map((course)=>{
            <card course={course}/>
        })}
    </div>
  )
}

export default Cards