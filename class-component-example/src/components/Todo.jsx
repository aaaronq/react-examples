import React, { Component } from 'react';

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            updating: false,
            value: this.props.todo,
        }

        this.edit = this.edit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleResubmit = this.handleResubmit.bind(this);
    }

    edit() {
        this.setState({
            ...this.state,
            updating: true,
        })
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            value: e.target.value,
        })
    }

    handleResubmit() {
        this.props.handleEdit(this.props.todo, this.state.value);
        console.log("foo");
        this.setState({
            ...this.state,
            updating: false,
        })
    }

    render() {
        return (
            <div style={{
                display: "flex",
                marginBottom: "5px",
                }}>
                {this.state.updating ? (
                    <div>
                        <input
                         type="text" 
                         value={this.state.value}
                         onChange={this.handleChange}
                         />
                         <button onClick={this.handleResubmit}> Resubmit </button>
                    </div>
                ) : (
                    <>
                        <li> {this.props.todo} </li>
                        <button data-value={this.props.todo} onClick={this.edit}> Edit </button>
                        <button data-value={this.props.todo} onClick={this.props.handleDelete}> Delete </button>
                    </>
                )}
            </div> 
        )
    }
}



