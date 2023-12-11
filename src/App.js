import Link from "./components/Link";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";

const App = () => {
    return(
        <div>
            <Link pathTo='/buttons'>Buttons</Link>
            <Link pathTo='/accordion'>Accordion</Link>
            <div>
                <h1>Below, Button page.</h1>
                <ButtonPage />
            </div>
            <br />
            <div>
                <h1>Below, Accordion page</h1>
                <AccordionPage />
            </div>
            <br />
            <div>
                <h1>Below, Dropdown page</h1>
                <DropdownPage />
            </div>
        </div>
    )
}

export default App;