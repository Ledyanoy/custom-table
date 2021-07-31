import Form from "./Components/Form";
import {simpleForm} from "./Data/Forms";

function App() {
    return (
        <div className="App">
            <Form {...simpleForm}/>
        </div>
    );
}

export default App;
