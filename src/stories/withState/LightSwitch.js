import React from 'react'
import PropTypes from 'prop-types'
import { withState } from 'recompose'

const LightSwitch = ({ isOn, setIsOn }) => {
  let backgroundColor = 'black';
  let otherState = 'ON';
  if (isOn) {
    backgroundColor = 'white';
    otherState = 'OFF';
  }
  return (
    <div className="LightSwitch">
      <div style={{ height: "600px", width: "600px", border: "1px solid #333", margin: 30, backgroundColor }}></div>
      <button onClick={e => setIsOn(!isOn)}>
        Turn the lights {otherState}
      </button>
    </div>
  );
}

LightSwitch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  setIsOn: PropTypes.func.isRequired,
}

/*
 * Implement the following state:
 *     isOn/setIsOn with default value false
 */
let EnhancedLightSwitch = LightSwitch;

export default EnhancedLightSwitch
