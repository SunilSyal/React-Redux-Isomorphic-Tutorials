import React, { Component } from 'react';

export default class Passion extends Component {

    triggerChange (evt) {
        this.props.changePassionProp (evt.target.value);
    }

    render() {
        return (
          <div>

            <select id="lang" onChange={this.triggerChange.bind(this)} value={this.props.passionProp}>
                <option value="">Submit something new...</option>
                <option value="Scripting">Scripting</option>
                <option value="Cricket">Cricket</option>
                <option value="Singing">Singing</option>
             </select>

            <p>
              <input value={this.props.passionProp} onChange={this.triggerChange.bind(this)}></input>
            </p>

          </div >
        );
    }
}
