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
 * Implement the following state:
 *     message/setMessage with default value ''
 * Implement the following handlers:
 *     onClick: Take a message as input, then `alert` the message.
 */
const EnhancedCustomMessage = compose(
  withState('message', 'setMessage', ''),
  withHandlers({
    onClick: () => (message) => alert(message)
  })
)(CustomMessage);

export default EnhancedCustomMessage
