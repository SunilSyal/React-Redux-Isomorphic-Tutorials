import React, { Component } from 'react';

export default class App extends Component {

    constructor(props) {
        super();

        this.state = {
         name: "Sunil Syal",
         passion: props.passion
        };
    }

    render() {
        return (
          <div>

            { /* Read state */ }

            <p> Name: { this.state.name }</p>
            <p> Passion: { this.state.passion }</p>

          </div >
        );
    }
}
