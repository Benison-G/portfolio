import React from 'react';
import ReactDOM from 'react-dom';
import UseEffectDemo from './use_effect/UseEffectDemo';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hello World!!!</h1>
                <UseEffectDemo />
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
