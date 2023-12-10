import { useState } from "react"

const Dropdown = ({ colors, selectedOption, handleSelectedOption }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandOptions = () => {
        setExpanded(!expanded)
    }

    const handleClickedOption = (option) => {
        handleSelectedOption(option)
        setExpanded(false)
    }

    return (
        <div>
            <div onClick={handleExpandOptions}>{ selectedOption ? selectedOption : 'Select...'}</div>
            { expanded && 
                <div>
                    { colors.map((color) => {
                        return (
                            <div key={color.id} onClick={() => handleClickedOption(color.value)}>{ color.value }</div>
                        )
                    }) }                
                </div>
            }
        </div>
    )
}

export default Dropdown