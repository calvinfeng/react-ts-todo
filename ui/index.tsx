// Import the entire library as a single variable
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import own files
import MainContent from './tsx-components/main_content';

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<MainContent />, document.getElementById('root'));
});