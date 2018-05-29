/**
 * @author Calvin Feng
 */

 // Import the entire library as a single variable
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Todo from './tsx-components/todo';
import Navigation from './jsx-components/navigation.jsx';

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <section className="main-content">
                <Navigation appName={"Todo"} tabs={["Home", "Todo", "Settings"]} />
                <Todo 
                    title={"Workout Routine"} 
                    items={[{id: 1, name: "Bench Press", description: "5 sets of 160lbs"}]}
                    date={new Date()} />
            </section>
        )
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<App />, document.getElementById('root'));
});