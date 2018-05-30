/**
 * @author Calvin Feng
 */

import * as React from 'react';
import Navigation from '../jsx-components/navigation';
import TodoForm from '../jsx-components/todo_form';
import { fetchTodo, createTodo } from '../util/http';


interface TodoItem {
    id: number;
    name: string;
    description: string;
}

interface TodoProps {
    title: string;
}

interface TodoStates {
    todoItems: TodoItem[];
    toggleDescription: boolean;
    isFetching: boolean;
    error: string;
}

class Todo extends React.Component<TodoProps, TodoStates> {
    constructor(props: TodoProps) {
        super(props);

        this.state = {
            error: "",
            toggleDescription: false,
            isFetching: false,
            todoItems: [],
        };
    }

    get todoItems(): JSX.Element[] {
        return this.state.todoItems.map((item) => {
            if (this.state.toggleDescription) {
                return <li key={item.id}>{item.description}</li>;
            }

            return <li key={item.id}>{item.name}</li>;
        });
    }

    get toggle(): JSX.Element {
        if (this.state.toggleDescription) {
            return <button onClick={this.toggleTodoDescription}>Show name</button>;
        }

        return <button onClick={this.toggleTodoDescription}>Show description</button>;
    }

    get fetchingState(): JSX.Element {
        if (this.state.isFetching) {
            return <p>Fetching todo items...</p>;
        }

        return <p>Done fetching!</p>;
    }

    toggleTodoDescription = () => {
        this.setState({
            toggleDescription: !this.state.toggleDescription
        });
    };

    handleSubmitTodo = (data: any) => {
        createTodo(data).then((todo) => {
            this.setState({ 
                todoItems : this.state.todoItems.concat([todo]),
                error: ""
            });
        }).catch((errorData) => {
            this.setState({ error: errorData.error });
        })
    };

    /**
     * This is a silly demonstration on how to use async/await to fetch synchronously. This is 
     * especially useful when it comes to fetching multiple pages of result.
     */
    async getTodoSequentially(): Promise<TodoItem[]> {
        const results: TodoItem[] = [];

        let i = 1;
        let isFetching = true;
        while (isFetching) {
            try {
                const todo = await fetchTodo(i);
                results.push(todo);
                i += 1;
            } catch (e) {
                console.log(e);
                isFetching = false;
            }
        }  

        return results;
    }

    componentDidMount() {
        this.getTodoSequentially().then((todoItems: TodoItem[]) => {
            this.setState({ todoItems });
        });
    }

    render() {
        return (
            <section className="todo">
                <h1>{this.props.title}</h1>
                <p>{this.state.error}</p>
                <ul>{this.todoItems}</ul>
                <div className="toggle-container">{this.toggle}</div>
                <div className="computer">{this.fetchingState}</div>
                <TodoForm handleSubmitTodo={this.handleSubmitTodo} />
            </section>
        );
    }
}

export default Todo;