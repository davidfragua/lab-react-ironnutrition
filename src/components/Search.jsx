import { useState } from "react"


function Search(props) {

    const [ searchInput, setSearchInput ] = useState("")

    const handleChange = (event) => {
        setSearchInput(event.target.value)
        props.filteredListFood(event.target.value)
    }

  return (
    <div>
        <h3>Search</h3>
        <input type="text" name="search" value={searchInput} onChange={handleChange} placeholder="Enter search query"/>



    </div>
  )
}

export default Search