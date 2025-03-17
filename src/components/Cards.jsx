
import React, { useState } from 'react'
import Card from './Card';

const Cards = (props) => {
    let courses=props.courses;

    const [likedCourses, setLikedCourses] = useState([]);

    //it returns list of all the courses
    
    function getCourses(){
        let allCourses=[];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }
    return(
        <div className='flex flex-wrap justify-center gap-4 mb-4'> 
            {
                getCourses().map((course)=>(
                    <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                ))
            }
        </div>
    )
}

export default Cards