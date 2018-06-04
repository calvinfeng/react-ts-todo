/**
 * @author Calvin Feng
 */

 // Import the entire library as a single variable
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MuiThemeProvider, lightBaseTheme, getMuiTheme } from 'material-ui/styles';
import Todo from './tsx-components/todo';
import './index.scss';


class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <Todo title={"Workout Routine"} />
            </MuiThemeProvider>
        )
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<App />, document.getElementById('root'));
});