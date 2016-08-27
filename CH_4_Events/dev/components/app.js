import React, { Component } from 'react';
import Passion from './passion'

export default class App extends Component {

    constructor(props) {
        super();

        this.state = {
         name: "Sunil Syal",
         passion: props.passion,
         age: 38
        };
    }

    changePassion (passion) {
      this.setState ({ passion })
    }

    render() {
        return (
          <div>

            { /* Read state */ }

            <p> { this.state.name } likes <b>{ this.state.passion }</b></p>

            { /* Using Prop as suffix to make it clear that it is a prop - changePassionProp */ }

            <Passion changePassionProp = {this.changePassion.bind(this)} passion={ this.state.passion }></Passion>

          </div >
        );
    }
}
