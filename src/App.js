
import React, { Component } from "react";
import "./App.css";
import "./react.jpg";
import Child from "./Child"


class App extends Component {
    render() {
        return (
            <div className="App">
                <h1> Hello, World! </h1>
                <img src="/dist/src/react.jpg" />
                <Child />
            </div>
        );
    }
}

export default App;