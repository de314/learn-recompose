import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withState, withHandlers, compose } from 'recompose';

import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

// withState
import ClickCounter from './withState/ClickCounter';
import LightSwitch from './withState/LightSwitch';
import EchoText from './withState/EchoText';
import DumbCalculator from './withState/DumbCalculator';

storiesOf('withState', module)
  .add('CLick Counter', () => {
    const EnhancedClickCounter = withState('count', 'setCount', 0)(ClickCounter);
    return (<EnhancedClickCounter />);
  })
  .add('Light Switch', () => {
    const EnhancedLightSwitch = compose(withState('isOn', 'setIsOn', false))(LightSwitch);
    return (<EnhancedLightSwitch />);
  })
  .add('Echo Text', () => {
    const EnhancedEchoText = compose(withState('text', 'setText', ''))(EchoText);
    return (<EnhancedEchoText />);
  })
  .add('Dumb Calculator', () => {
    const EnhancedDumbCalculator = compose(withState('num', 'setNum', 0))(DumbCalculator);
    return (<EnhancedDumbCalculator />);
  });

// withHandlers
import HelloWorld from './withHandlers/HelloWorld';
import HelloRandomNumber from './withHandlers/HelloRandomNumber';
import CustomMessage from './withHandlers/CustomMessage';
import Transformers from './withHandlers/Transformers';

storiesOf('withHandlers', module)
  .add('Hello World', () => (<HelloWorld />))
  .add('Hello Random Number', () => (<HelloRandomNumber />))
  .add('Custom Message', () => (<CustomMessage />))
  .add('Transformers', () => (<Transformers />));
