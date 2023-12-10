import { useState } from "react"

import { GoChevronDown } from "react-icons/go";

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
        <div className="w-48 relative">
            <div 
                className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full'
                onClick={handleExpandOptions}>
                    { selectedOption ? selectedOption : 'Select...'}
                    <GoChevronDown className="text-2xl"/>
            </div>
            { expanded && 
                <div className="absolute top-full rounded shadow bg-white w-full">
                    { colors.map((color) => {
                        return (
                            <div 
                                className='hover: bg-sky-100 rounded cursor-pointer p-1'
                                key={color.id}
                                onClick={() => handleClickedOption(color.value)}>
                                    { color.value }
                            </div>
                        )
                    }) }                
                </div>
            }
        </div>
    )
}

export default Dropdown