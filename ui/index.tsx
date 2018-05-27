// Import the entire library as a single variable
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import own files
import TodoComponent from './component';

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <TodoComponent 
            title={"Workout Routine"} 
            items={[{id: 1, name: "Bench Press", description: "5 sets of 160lbs"}]}
            date={new Date()} />, 
        document.getElementById('root'));
});