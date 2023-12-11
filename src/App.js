import Link from "./components/navigation/Link";
import Route from "./components/navigation/Route";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";

const App = () => {
    return(
        <div>
            <Link pathTo='/button'>Buttons</Link>
            <Link pathTo='/accordion'>Accordion</Link>
            <Link pathTo='/dropdown'>Dropdown</Link>

            <Route path='/button'>
                <ButtonPage />
            </Route>
            <Route path='/accordion'>
                <AccordionPage />
            </Route>
            <Route path='/dropdown'>
                <DropdownPage />
            </Route>
        </div>
    )
}

export default App;