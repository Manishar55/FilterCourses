
import React from "react"
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import {apiUrl, filterData} from "./data"

function App() {

  return (
    <div>
      <Navbar/>

      <Filter
        filterData={filterData}
      />

      <Cards/>
    </div>
  )
}

export default App
