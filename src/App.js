import React, {Component} from 'react';


export class App extends Component {
state={
    counter:0
};
    render() {

            return (
                <div data-test="component-app" className="App">
                    <h1 data-test="counter-display">{this.state.counter}</h1>
                    <button
                        data-test="increment-button"
                        onClick={()=>{
                            this.setState({counter: this.state.counter + 1})
                        }}
                    >Increment</button>
                </div>
            );
        }
}

export default App;
