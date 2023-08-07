import React, {Component} from 'react';

export default class TodoCount extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1> Number of todos = {this.props.todos.length} </h1>
            </div>
        )
    }
}