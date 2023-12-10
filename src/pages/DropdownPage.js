import Dropdown from "../components/Dropdown"
import { useState } from "react"

const colors = [
    { id: 'red', value: 'Red'},
    { id: 'blue', value: 'Blue'},
    { id: 'green', value: 'Green'},
]

const DropdownPage = () => {
    const [selectedOption, setSelectedOption] = useState(null)
    const handleSelectedOption = (option) => {
        setSelectedOption(option)
    }

    return(
        <Dropdown
            colors = { colors }
            selectedOption={ selectedOption }
            handleSelectedOption={ handleSelectedOption }
        />
    )
}

export default DropdownPage