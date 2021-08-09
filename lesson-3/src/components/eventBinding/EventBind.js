  /**
   * TODO List
   * create class component
   * 1. Binding in render method
   * 2. Binding in render method using arrow function
   * 3. Binding in the constructor
   * 4. Class property as an arrow function
   * 5. Send argument to event handler
   */

  import {Component} from "react";

  // class EventBind extends Component{

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       message : "Hello"
  //     }
  //   }
  //   handleClick() {
  //     this.setState({message: "Goodbye!"});
  //     console.log("this:",this);
  //   }

  //   render() {
  //     return(
  //       <div>
  //         <p>{this.state.message}</p>
  //       <button onClick={this.handleClick.bind(this)}>Click</button>
  //         
  //       </div>
  //     )
  //   }

  // }



  // class EventBind extends Component{

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       message : "Hello"
  //     }
  //   }
  //   handleClick() {
  //     this.setState({message: "Goodbye!"});
  //     console.log("this:",this);
  //   }

  //   render() {
  //     return(
  //       <div>
  //         <p>{this.state.message}</p>
  //         <button onClick={()=> this.handleClick()}>Click</button>
  //       </div>
  //     )
  //   }

  // }


  // class EventBind extends Component{

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       message : "Hello"
  //     };
  //     this.handleClick = this.handleClick.bind(this);
  //   }
  //   handleClick() {
  //     this.setState({message: "Goodbye!"});
  //     console.log("this:",this);
  //   }

  //   render() {
  //     return(
  //       <div>
  //         <p>{this.state.message}</p>
  //         <button onClick={this.handleClick}>Click</button>
  //       </div>
  //     )
  //   }

  // }


  // class EventBind extends Component{

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       message : "Hello"
  //     };
      
  //   }
  //   handleClick = () => {
  //     this.setState({message: "Goodbye!"});
  //     console.log("this:",this);
  //   }

  //   render() {
  //     return(
  //       <div>
  //         <p>{this.state.message}</p>
  //         <button onClick={this.handleClick}>Click</button>
  //       </div>
  //     )
  //   }

  // }



  class EventBind extends Component{

    constructor(props) {
      super(props);
      this.state = {
        message : "Hello"
      };
      
    }
    handleClick(name) {
      this.setState({message: `Goodbye! ${name}`});
      console.log("this:",this);
    }

    render() {
      return(
        <div>
          <p>{this.state.message}</p>
          <button onClick={() => this.handleClick("XXX")}>Click</button>
        </div>
      )
    }

  }


  export default EventBind;
