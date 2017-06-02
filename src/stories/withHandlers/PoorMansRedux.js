import React from 'react'
import PropTypes from 'prop-types'

const PoorMansRedux = ({
  field, setField,
  fieldValue,
  model,
  onChangeFieldValue
}) => {
  return (
    <div className="PoorMansRedux">
      <div>
        Property Name <input value={field} onChange={e => setField(e.target.value)}/>
      </div>
      <div>
        Property Value <input value={field} onChange={e => onChangeFieldValue(e.target.value)}/>
      </div>
      <div>
        <pre>{JSON.stringify(model, null, 2)}</pre>
      </div>
    </div>
  );
}

PoorMansRedux.propTypes = {
  field: PropTypes.string.isRequired,
  setField: PropTypes.func.isRequired,
  fieldValue: PropTypes.string.isRequired,
  model: PropTypes.object.isRequired,
  onChangeFieldValue: PropTypes.func.isRequired,
}

/*
 * Implement the following state:
 *     field/setField with default value ''
 *     fieldValue/setFieldValue with default value ''
 *     model/setModel with default value {}
 * Implement the following handlers:
 *     onChangeFieldValue: Takes new fieldValue as input. Updates model at
 *         model[field] = fieldValue. Sets the model, then sets the fieldValue.
 */
const EnhancedPoorMansRedux = PoorMansRedux;

export default PoorMansRedux
