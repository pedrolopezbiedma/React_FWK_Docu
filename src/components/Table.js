const Table = ({ items }) => {
    return(
        <div>
            <div>{ items.length }</div>
            <table className="table-auto border-spacing-2">
                <thead>
                    <tr className="border-b-2">
                        <th>Name</th>
                        <th>Color</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map((item) => {
                        return(
                            <tr key={item.name} className="border-b">
                               <td className="p-3">{ item.name }</td>
                               <td className="p-3"><div className={`p-3 m-2 ${item.color}`}></div></td>
                               <td className="p-3">{ item.score }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table