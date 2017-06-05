import React from 'react'
import PropTypes from 'prop-types'
import { withHandlers } from 'recompose'

const HelloRandomNumber = ({ onClick }) => {
  /*
   * Note that this is bad practice. All values should be passed into dumb
   * components so that they can be considered a pure function.
   *
   *   Pure Function: produces the same output for the same input.
   *
   * This NOT a pure function because we generate a random number meaning that
   * we will see different numbers each time it is rendered.
   */
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return (
    <div className="HelloRandomNumber">
      <button onClick={() => onClick(randomNumber)}>
        The number is {randomNumber}
      </button>
    </div>
  );
}

HelloRandomNumber.propTypes = {
  onClick: PropTypes.func.isRequired,
}

/*
 * Implement the following handlers:
 *     onClick: Take a random number as input, then `alert` the number.
 */
const EnhancedHelloRandomNumber = HelloRandomNumber;

export default EnhancedHelloRandomNumber;
