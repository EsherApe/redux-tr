import React, {Component} from 'react';
import store from '../store';
import {addItem} from '../actionCreators';

class ItemsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: store.getState()[0].items
        }
    }

    onAddItem = (name) => {
        let id = this.state.items.length + 1;
        let text = `item №${id}`;
        let item = {id: id, text: text};

        store.dispatch(addItem(item));

        this.setState({
            items: store.getState()[0].items
        })
    };

    render() {

        let listItems = this.state.items.map((item) => <li key={item.id}>{item.text}</li>);
        return(
            <React.Fragment>
                <ul>
                    {listItems}
                </ul>
                <button onClick={this.onAddItem}>Add Item</button>
            </React.Fragment>
        )
    }
}

export default ItemsList;