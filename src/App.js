import Button from './components/Button'

const App = () => {
    return(
        <div>
            <div>
                <Button>Plain</Button>
            </div>
            <div>
                <Button primary>Primary</Button>
            </div>
            <div>
                <Button secondary>Secondary</Button>
            </div>
            <div>
                <Button success>Success</Button>
            </div>
            <div>
                <Button warning outlined>Warning</Button>
            </div>
            <div>
                <Button danger rounded>Danger</Button>   
            </div>
        </div>
    )
}

export default App;