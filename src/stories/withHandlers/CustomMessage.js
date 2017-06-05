import React from 'react'
import PropTypes from 'prop-types'
import { compose, withHandlers, withState } from 'recompose'

const CustomMessage = ({ message, setMessage, onClick }) => {
  return (
    <div className="CustomMessage">
      <div>
        <input value={message} onChange={e => setMessage(e.target.value)} placeholder='Type your message here' />
      </div>
      <div>
        <button onClick={() => onClick(`Your message is: "${message}"`)}>Click Here</button>
      </div>
    </div>
  );
}

CustomMessage.propTypes = {
  message: PropTypes.string.isRequired,
  setMessage: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
}

/*
 * Implement the following state: message/setMessage
 * Implement the following handlers:
 *     showMessage: Take a message as input, then `alert` the message.
 */
const EnhancedCustomMessage = CustomMessage;

export default EnhancedCustomMessage
