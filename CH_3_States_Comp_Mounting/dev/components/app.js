import React, { Component } from 'react';

export default class App extends Component {

    constructor(props) {
        super();

        this.state = {
         name: "Sunil Syal",
         passion: props.passion,
         age: 38
        };
    }

    componentWillUpdate(newProps, newState) {
      console.log("===== componentWillUpdate");
      console.log(newProps, newState);
    }

    componentDidUpdate(prevProps, prevState) {
      console.log("===== componentDidUpdate");
      console.log(prevProps, prevState);
    }

    incAge () {
      //this.state.age++; // Using only this commnad will not re-render the componenet
      var age = this.state.age + 1;
      this.setState({age});
    }

    componentWillMount () {
      console.log("Will Mount");
    }

    componentDidMount () {
      console.log("Mounted");
    }

    render() {
        return (
          <div>

            { /* Read state */ }

            <p> Name: { this.state.name }</p>
            <p> Passion: { this.state.passion }</p>
            <p> Age: { this.state.age }</p>

            <button onClick={this.incAge.bind(this)}>Age ++ </button>

          </div >
        );
    }
}
