/**
 * @author Calvin Feng
 */

import * as React from 'react';
import Navigation from '../jsx-components/navigation.jsx';

interface TodoItem {
    id: number;
    name: string;
    description: string;
}

interface TodoProps {
    title: string;
    items: TodoItem[];
    date: Date;
}

interface TodoStates {
    toggleDescription: boolean;
    computing: boolean;
    answer: null | number;
}

class Todo extends React.Component<TodoProps, TodoStates> {
    constructor(props: TodoProps) {
        super(props);

        this.state = {
            toggleDescription: false,
            computing: true,
            answer: null
        };
    }

    get todoItems(): JSX.Element[] {
        return this.props.items.map((item) => {
            if (this.state.toggleDescription) {
                return <li key={item.id}>{item.description}</li>;
            }

            return <li key={item.id}>{item.name}</li>;
        });
    }

    get button(): JSX.Element {
        if (this.state.toggleDescription) {
            return <button onClick={this.toggleTodoName}>Toggle Todo Name</button>;
        }

        return <button onClick={this.toggleTodoDescription}>Toggle Todo Description</button>;
    }

    get computingStatus(): JSX.Element {
        if (this.state.computing) {
            return <p>Computing...</p>;
        }

        return <p>Answer is {this.state.answer}</p>;
    }

    toggleTodoName = () => {
        this.setState({
            toggleDescription: false
        });
    }

    toggleTodoDescription = () => {
        this.setState({
            toggleDescription: true
        });
    }

    generateRandNum(): Promise<number> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Math.random());
            }, 1000);
        });
    }

    async collectRandomNums(): Promise<number> {
        const firstRand = await this.generateRandNum();
        const secondRand = await this.generateRandNum();
        const thirdRand = await this.generateRandNum();
        return firstRand + secondRand + thirdRand;
    }

    componentDidMount() {
        this.collectRandomNums().then((answer) => {
            this.setState({
                computing: false,
                answer
            });
        });
    }

    render() {
        return (
            <section className="todo">
                <h1>{this.props.title}</h1>
                <h2>{this.props.date.toDateString()}</h2>
                <ul>{this.todoItems}</ul>
                <div className="button-container">{this.button}</div>
                <div className="computer">{this.computingStatus}</div>
            </section>
        );
    }
}

export default Todo;