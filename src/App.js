import React, {Component} from 'react';
import ItemList from './components/ItemsList';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <ItemList/>
            </React.Fragment>
        );
    }
}

export default App;