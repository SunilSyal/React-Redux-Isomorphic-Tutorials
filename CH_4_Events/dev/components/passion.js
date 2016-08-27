import React, { Component } from 'react';

export default class Passion extends Component {

    triggerChange (evt) {
        this.props.changePassion (evt.target.value);
    }

    render() {
        return (
          <div>

            <select id="lang" onChange={this.triggerChange.bind(this)} value={this.props.passion}>
                <option value="">Submit something new...</option>
                <option value="Scripting">Scripting</option>
                <option value="Cricket">Cricket</option>
                <option value="Singing">Singing</option>
             </select>

            <p>
              <input value={this.props.passion} onChange={this.triggerChange.bind(this)}></input>
            </p>

          </div >
        );
    }
}
