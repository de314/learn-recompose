import React from 'react'
import PropTypes from 'prop-types'
import { compose, withHandlers, withState } from 'recompose'

const Transformers = ({
  message, setMessage,
  showMessage, showBigMessage, showSmallMessage
}) => {
  return (
    <div className="Transformers">
      <div>
        <input value={message} onChange={e => setMessage(e.target.value)} placeholder='Type your message here' />
      </div>
      <div>
        <button onClick={() => showMessage(message)}>Show Message</button>{' '}
        <button onClick={() => showBigMessage(message)}>SHOW BIG MESSAGE</button>{' '}
        <button onClick={() => showSmallMessage(message)}>show small message</button>
      </div>
    </div>
  );
}

Transformers.propTypes = {
  message: PropTypes.string.isRequired,
  setMessage: PropTypes.func.isRequired,
  showBigMessage: PropTypes.func.isRequired,
  showMessage: PropTypes.func.isRequired, // This is provided by the rendering component
  showSmallMessage: PropTypes.func.isRequired,
}

/*
 * You will be provided a function `showMessage` as a component prop.
 *
 * Implement the following state:
 *     message/setMessage with default value ''
 *
 * Implement the following handlers:
 *     showBigMessage: Takes a message as input, transforms it to upper case and
 *         passes the new message to the showMessage prop.
 *     showSmallMessage: Takes a message as input, transforms it to upper case
 *         and passes the new message to the showMessage prop.
 */
const EnhancedTransformers = compose(
  withState('message', 'setMessage', ''),
  withHandlers({
    showBigMessage: ({ showMessage }) => message => showMessage(message.toUpperCase()),
    showSmallMessage: ({ showMessage }) => message => showMessage(message.toLowerCase()),
  })
)(Transformers);

export default EnhancedTransformers
