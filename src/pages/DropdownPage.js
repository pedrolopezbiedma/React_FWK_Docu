import Dropdown from "../components/Dropdown"

const DropdownPage = () => {
    const colors = [
        { id: 'red', value: 'Red'},
        { id: 'blue', value: 'Blue'},
        { id: 'green', value: 'Green'},
    ]
    return(
        <Dropdown colors = { colors }/>
    )
}

export default DropdownPage