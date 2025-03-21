
import React from 'react'

function Filter({filterData, category, setCategory}) {

  function filterHandler(title){
    setCategory(title)
  }
  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
        {filterData.map((data)=>{
            return( <button 
              onClick={()=>filterHandler(data.title)}

              className={`text-lg px-2 py-1 rounded-md font-medium text-white border-2 transition-all duration-300 
                ${category===data.title ? "bg-neutral-950 border-white-600" : "bg-blue-950/80 border-transparent"} `}
            
            key={data.id}> {data.title} </button>)
        })}
    </div>
  )
}

export default Filter