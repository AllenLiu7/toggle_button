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
          className="switch-checkbox-uncontrol"
         
          id={`switch-new-uncontrol`}  
          type="checkbox"
          ref={this.check}
          disabled={this.props.disabled}
        />
        <label
          className="switch-label-uncontrol"
          htmlFor={`switch-new-uncontrol`}
          style={{ background: this.props.color }}
          //style={{ background: this.check.current.checked && this.props.color }}
        >
          <span className={`switch-button-uncontrol`} />
        </label>
      </>
      );
    }
  }

export default UncontroledSwitch