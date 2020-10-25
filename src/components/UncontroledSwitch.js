import React, {Component} from 'react';
import './UncontroledSwitch.css';


class UncontroledSwitch extends Component {
    constructor(props) {
        super(props);
        this.check = React.createRef();
      }

    render() {

      return (
        <>
        <input
          className="react-switch-checkbox-uncontrol"
          id={`react-switch-new-uncontrol`}  
          type="checkbox"
          ref={this.check}
          defaultChecked={false}
        />
        <label
          className="react-switch-label-uncontrol"
          htmlFor={`react-switch-new-uncontrol`}
        >
          <span className={`react-switch-button-uncontrol`} />
        </label>
      </>
      );
    }
  }

export default UncontroledSwitch