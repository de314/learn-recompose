import React from 'react'
import PropTypes from 'prop-types'

const ClickCounter = ({ count, setCount }) => (
  <div className="ClickCounter">
    <h1>Count: {count}</h1>
    <button onClick={e => setCount(count+1)}>+1</button>
  </div>
);

ClickCounter.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
}

export default ClickCounter
