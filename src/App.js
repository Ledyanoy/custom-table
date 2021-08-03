import Form from "./Components/Form";
import {simpleForm} from "./Data/Forms";

import styles from './app.module.scss';

function App() {
    return (
        <div className={styles.appStyles}>
            <Form {...simpleForm} className={styles.formStyles}/>
        </div>
    );
}

export default App;
