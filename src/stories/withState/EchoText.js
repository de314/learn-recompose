import React from 'react'
import PropTypes from 'prop-types'

const EchoText = ({ text, setText }) => {
  return (
    <div className="EchoText">
      <h1>Type anything</h1>
      <input value={text} onChange={e => setText(e.target.value)} />
      <h1>And it will apear below</h1>
      <p>
        { text }
      </p>
    </div>
  );
}

EchoText.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
}

export default EchoText
