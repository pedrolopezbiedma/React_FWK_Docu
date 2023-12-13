import { useState } from "react"
import Table from "./Table"

const getSortValue = (item) => item.sortBy;

const SortablePage = (props) => {
    const { config, items } = props
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    console.log('order By is -->', sortBy ,' and sortOrder ', sortOrder)

    const generateColumns = () => {
        return config.map((configItem) => {
            return {
                ...configItem,
                header: configItem.sortBy ? <th onClick={() => handleColumnClick(configItem.label)}>{configItem.label}</th> : <th>{configItem.label}</th>
            }
        })
    }
    const updatedConfig = generateColumns()

    const generateRows = () => {
        if(sortBy && sortOrder){
            const sortValue = getSortValue(config.find((column) => column.label === sortBy))

            return items.sort((a, b,) => {
                const valueA = sortValue(a);
                const valueB = sortValue(b);
        
                const orderValue = sortOrder === 'asc' ? 1 : -1;
        
                if(typeof valueA === 'string'){
                    return (valueA.localeCompare(valueB)) * orderValue
                } else {
                    return (valueA - valueB) * orderValue
                }
            })
        }

        return props.items
    }
    const updatedValues = generateRows()

    const handleColumnClick = (clickedColumn) => {
        setSortBy(clickedColumn)
        switch (sortOrder) {
            case null:
                setSortOrder('asc');
                break;
            case 'asc':
                setSortOrder('desc');
                break;
            case 'desc':
                setSortOrder(null);
                setSortBy(null)
                break;
            default:
                break;
        }
    }

    return(
        <Table {...props} config={updatedConfig} items={updatedValues} />
    )
}

export default SortablePage