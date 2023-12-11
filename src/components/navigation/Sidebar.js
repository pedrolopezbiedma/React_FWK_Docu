import Link from "./Link"

const Sidebar = () => {
    const routes = [
        { label: 'Dropdown', path: '/' },
        { label: 'Button', path: '/button' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Modal', path: '/modal' },
    ]
    return (
        <div>
            { routes.map((route) => {
                return (
                    <Link
                        classNames='sticky top-0 overflow-y-scroll flex flex-col items-start'
                        key={route.label}
                        pathTo={route.path}>{ route.label }</Link>
                )
            }) }
       </div>
    )
}

export default Sidebar