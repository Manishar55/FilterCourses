
import "./Spinner.css"
import React from 'react'

function Spinner() {
  return (
    <div className="flex flex-col items-center space-y-2 gap-6">
      <div className='spinner'></div>
      <p className="text-bg-950 text-lg font-semibold">Loading...</p>
    </div>
  )
}

export default Spinner