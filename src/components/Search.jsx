import { useState } from "react"
import { Divider, Input } from 'antd';


function Search(props) {

    const [ searchInput, setSearchInput ] = useState("")

    const handleChange = (event) => {
        setSearchInput(event.target.value)
        props.filteredListFood(event.target.value)
    }

  return (
    <div>
        <Input type="text" name="search" value={searchInput} onChange={handleChange} placeholder="Enter search query"/>



    </div>
  )
}

export default Search