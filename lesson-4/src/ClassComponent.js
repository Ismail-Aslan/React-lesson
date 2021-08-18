import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            counter:0
        };
        this.increase = this.increase.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    

    increase(){
        this.setState({counter:this.state.counter+1})
    }


    render() {
        console.log('Class counter: ', this.state.counter);
        return (
            <div className="class">
                <h2>Class Component</h2>
                <p>Counter: {this.state.counter}</p>
                <button onClick={() => this.increase()}>Increase</button>
            </div>
        );
    }
};
