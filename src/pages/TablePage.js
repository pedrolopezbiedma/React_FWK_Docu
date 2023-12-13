import Table from "../components/Table"

const items = [
    { name: 'Apple', color: 'bg-red-500', score: 3},
    { name: 'Banana', color: 'bg-yellow-300', score: 1},
    { name: 'Lime', color: 'bg-green-400', score: 5},
    { name: 'Orange', color: 'bg-orange-400', score: 2},
]

const TablePage = () => {
    return (
        <Table items={ items }/>
    )
}

export default TablePage