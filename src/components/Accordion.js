import { useState } from "react"

import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
    console.log('Items from props are -->', items)

    const [expandedIndex, setExpandedIndex] = useState(-1);
    const isExpanded = (index) => index === expandedIndex;

    const handleClick = (clickedIndex) => {
        isExpanded(clickedIndex) ? setExpandedIndex(-1) : setExpandedIndex(clickedIndex)
    }

    return ( 
        <div>
            { items.map((item) => {
                    return (
                        <div key={item.id}>
                            <div onClick={() => handleClick(item.id)}>
                                { item.header }
                                { isExpanded(item.id) ? <GoChevronDown /> : <GoChevronLeft />}
                            </div>
                            { isExpanded(item.id) && <div>{ item.content }</div>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Accordion