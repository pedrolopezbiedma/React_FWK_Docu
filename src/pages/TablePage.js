import SortablePage from "../components/SortableTable"
import Table from '../components/Table'

const items = [
    { name: 'Apple', color: 'bg-red-500', score: 3},
    { name: 'Banana', color: 'bg-yellow-300', score: 1},
    { name: 'Lime', color: 'bg-green-400', score: 5},
    { name: 'Orange', color: 'bg-orange-400', score: 2},
]

const config = [
    { 
        label: 'Name',
        render: (item) => item.name,
        sortBy: (item) => item.name
    },
    { 
        label: 'Color',
        render: (item) => <div className={`p-3 m-2 ${item.color}`}></div>
    },
    { 
        label: 'Score',
        render: (item) => item.score,
        sortBy: (item) => item.score,
    },
]

const keyFn = (item) => item.name

const TablePage = () => {
    return (
        <div>
            <h1>Sortable Table</h1>
            <SortablePage items={items} config={config} keyFn={keyFn} />

            <br />
            <h1>Fix Table</h1>
            <Table items={ items } config={ config } keyFn = { keyFn }/>
        </div>
    )
}

export default TablePage