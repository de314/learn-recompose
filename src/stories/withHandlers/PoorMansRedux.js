import React from 'react'
import PropTypes from 'prop-types'
import { compose, withHandlers, withState } from 'recompose'

const PoorMansRedux = ({
  field, setField,
  fieldValue,
  model,
  onChangeFieldValue
}) => {
  return (
    <div className="PoorMansRedux">
      <p>
        Enter the property name first, then enter the value. You should see the model below update
        when change the value.
      </p>
      <div>
        Property Name <input value={field} onChange={e => setField(e.target.value)}/>
      </div>
      <div>
        Property Value <input value={fieldValue} onChange={e => onChangeFieldValue(e.target.value)}/>
      </div>
      <div style={{ width: "100%", backgroundColor: "#ddd", padding: 15 }}>
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
 *
 * Implement the following handlers:
 *     onChangeFieldValue: Takes new fieldValue as input. Updates model at
 *         model[field] = fieldValue. Sets the model, then sets the fieldValue.
 */
const EnhancedPoorMansRedux = compose(
  withState('field', 'setField', ''),
  withState('fieldValue', 'setFieldValue', ''),
  withState('model', 'setModel', {}),
  withHandlers({
    onChangeFieldValue: props => newValue => {
      const { setFieldValue, model, setModel, field } = props;
      setFieldValue(newValue);
      model[field] = newValue;
      setModel(model);
    }
  })
)(PoorMansRedux);

export default EnhancedPoorMansRedux
