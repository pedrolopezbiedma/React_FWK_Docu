import { useState } from "react"

import Panel from "./Panel";

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
            <Panel 
                className='w-48 relative flex justify-between items-center cursor-pointer'
                onClick={handleExpandOptions}>
                    { selectedOption?.value || 'Select...'}
                    <GoChevronDown className="text-2xl"/>
            </Panel>
            { expanded && 
                <Panel className="absolute top-full">
                    { colors.map((color) => {
                        return (
                            <div 
                                className='hover:bg-sky-100 rounded cursor-pointer p-1'
                                key={color.id}
                                onClick={() => handleClickedOption(color)}>
                                    { color.value } 
                            </div>
                        )
                    }) }                
                </Panel>
            }
        </div>
    )
}

export default Dropdown