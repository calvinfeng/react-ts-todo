/**
 * @author Calvin Feng
 */

import React from 'react';

class Navigation extends React.Component {
    state = {
        option: 0
    }

    get tabs() {
        return this.props.tabs.map((tab) => {
            return <button key={tab}>{tab}</button>;
        });
    }

    render() {
        return (
            <section className="navigation">
                <h1>Welcome to {this.props.appName}</h1>
                {this.tabs}
            </section>
        )
    }
}

export default Navigation;