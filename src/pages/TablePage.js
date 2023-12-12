import Table from "../components/Table"

const items = [
    { name: 'Apple', color: 'red', score: 3},
    { name: 'Banana', color: 'yellow', score: 1},
    { name: 'Lime', color: 'green', score: 5},
    { name: 'Orange', color: 'orange', score: 2},
]

const TablePage = () => {
    return (
        <Table items={ items }/>
    )
}

export default TablePage