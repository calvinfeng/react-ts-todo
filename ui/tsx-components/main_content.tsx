/**
 * @author Calvin Feng
 */

import * as React from 'react';
import Todo from './todo';
import Navigation from '../jsx-components/navigation.jsx';

class MainPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <section className="main-content">
                <Navigation appName={"Todo"} />
                <Todo 
                    title={"Workout Routine"} 
                    items={[{id: 1, name: "Bench Press", description: "5 sets of 160lbs"}]}
                    date={new Date()} />
            </section>
        )
    }
}

export default MainPage
