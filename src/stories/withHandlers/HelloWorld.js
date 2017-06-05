import React from 'react'
import PropTypes from 'prop-types'
import { withHandlers } from 'recompose';

const HelloWorld = ({ onClick }) => {
  return (
    <div className="HelloWorld">
      <button onClick={() => onClick()}>Click Me</button>
    </div>
  );
}

HelloWorld.propTypes = {
  onClick: PropTypes.func.isRequired,
}

/*
 * Implement the following handlers:
 *     onClick: Alert the message "Hello, World!"
 */
const EnhancedHelloWorld = withHandlers({
  onClick: () => () => alert("Hello, World!")
})(HelloWorld);

export default EnhancedHelloWorld;
