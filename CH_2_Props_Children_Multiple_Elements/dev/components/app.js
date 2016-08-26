import React, {Component} from 'react';

export default class App extends Component {
    getChildList() {
      return (
          this.props.children.map((child, key) => {
            return <li>Child {key}: {child}</li>
          })
      );
    }

    render() {
        return (
            <div>
                {/* Read property */}
                <p>Property propX: {this.props.propX}</p>

                {/* Child count */}
                <div>Total Children: {this.props.children.length}</div>

                {/* Read individual child */}
                <div>First child: {this.props.children[0]}</div>
                <div>Second child: {this.props.children[0]}</div>

                {/* Parse children to generate desired output using a separate function */}
                <div>{this.getChildList()}</div>

                <h1>Hello World!!!</h1>
                <h2>I am here now!!!</h2>
            </div>
        );
    }
}
