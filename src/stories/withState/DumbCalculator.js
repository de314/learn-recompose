import React from 'react'
import PropTypes from 'prop-types'
import { withState } from 'recompose'

const DumbCalculator = ({ num, setNum }) => {
  return (
    <div className="DumbCalculator">
      <p>
        Input: <input value={num} onChange={e => setNum(parseInt(e.target.value))} />
      </p>
      <p>
        <button onClick={() => setNum(num + 1)}>Add 1</button>
      </p>
      <p>
        <button onClick={() => setNum(num + 10)}>Add 10</button>
      </p>
      <p>
        <button onClick={() => setNum(num * 2)}>Double</button>
      </p>
    </div>
  );
}

DumbCalculator.propTypes = {
  num: PropTypes.number.isRequired,
  setNum: PropTypes.func.isRequired,
}

/*
 * Implement the following state:
 *     num/setNum with default value 18
 */
let EnhancedDumbCalculator = withState('num', 'setNum', 18)(DumbCalculator);

export default EnhancedDumbCalculator
