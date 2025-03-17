
import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import Spinner from "./components/Spinner"

import {apiUrl, filterData} from "./data"
import { toast } from "react-toastify"

const App=()=> {
  const [courses, setCourses]=useState();
  const[loading, setLoading]=useState(true); 
  
    async function fetchData(){
      setLoading(true);
      try{
        let response=await fetch(apiUrl);
        let output=await response.json();
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }

    useEffect(()=>{
      fetchData();
    }, [])

  return (
    <div className="min-h-screen flex flex-col" >
      
      <div><Navbar/></div>

      <div>
        <Filter filterData={filterData}/>
      </div>

      <div>
        {
          loading? (<Spinner/>) : (<Cards courses={courses} />)
        }
      </div>
    </div>
  );
};

export default App
