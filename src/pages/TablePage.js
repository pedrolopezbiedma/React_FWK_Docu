import Table from "../components/Table"

const items = [
    { name: 'Apple', color: 'bg-red-500', score: 3},
    { name: 'Banana', color: 'bg-yellow-300', score: 1},
    { name: 'Lime', color: 'bg-green-400', score: 5},
    { name: 'Orange', color: 'bg-orange-400', score: 2},
]
const config = [
    { 
        label: 'Name',
        render: (item) => item.name 
    },
    { 
        label: 'Color',
        render: (item) => <div className={`p-3 m-2 ${item.color}`}></div>
    },
    { 
        label: 'Score',
        render: (item) => item.score,
        header: () => <th className="bg-red-500">Score</th>
    },
]

const keyFn = (item) => item.name

const TablePage = () => {
    return (
        <Table items={ items } config={ config } keyFn = { keyFn }/>
    )
}

export default TablePage