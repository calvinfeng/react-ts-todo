/**
 * @author Calvin Feng
 */

import React from 'react';

class TodoForm extends React.Component {
    state = {
        name: "",
        description: ""
    };

    handleNameChange = (e) => {
        e.preventDefault();
        this.setState({ name: e.currentTarget.value });
    };

    handleDescriptionChange = (e) => {
        e.preventDefault();
        this.setState({ description: e.currentTarget.value });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmitTodo(this.state);
        this.setState({ name: "", description: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>New Todo</h1>
                <label>Name </label>
                <input type="text" 
                    value={this.state.name} 
                    onChange={this.handleNameChange} />
                <br />
                <label>Description </label>
                <input type="text" 
                    value={this.state.description} 
                    onChange={this.handleDescriptionChange} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default TodoForm;