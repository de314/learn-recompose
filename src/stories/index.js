import React from 'react';
import { storiesOf, action, linkTo, setAddon } from '@storybook/react';
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
  .add('Click Counter', () => (<ClickCounter />))
  .add('Light Switch', () => (<LightSwitch />))
  .add('Echo Text', () => (<EchoText />))
  .add('Dumb Calculator', () => (<DumbCalculator />));

// withHandlers
import HelloWorld from './withHandlers/HelloWorld';
import HelloRandomNumber from './withHandlers/HelloRandomNumber';
import CustomMessage from './withHandlers/CustomMessage';
import Transformers from './withHandlers/Transformers';

storiesOf('withHandlers', module)
  .add('Hello World', () => (<HelloWorld />))
  .add('Hello Random Number', () => (<HelloRandomNumber />))
  .add('Custom Message', () => (<CustomMessage />))
  .add('Transformers', () => (<Transformers showMessage={(message) => alert(message)} />));
