import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";

const App = () => {
    return(
        <div>
            <div>
                <h1>Below, Button page.</h1>
                <ButtonPage />
            </div>
            <br />
            <div>
                <h1>Below, Accordion page</h1>
                <AccordionPage />
            </div>
        </div>
    )
}

export default App;