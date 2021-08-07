import React from "react";


class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }
    changeCounter = () => {this.setState({counter: this.state.counter + 1})};
    render() {
        return(
            //herşey tek bir div içerisinde olmak zorunda
            <div className="wrapper"> 
                <h2>
                    Class Component
                </h2>
                <p>{this.props.y}</p>
                <p>My counter(STATE): {this.state.counter}</p>
                <button type="button" onClick={this.changeCounter}>Change Counter</button>
            </div>
        );
    }
}
export default ClassComponent;