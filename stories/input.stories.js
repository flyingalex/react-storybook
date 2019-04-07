import React from 'react';

import { storiesOf } from '@storybook/react';

import ControlledInput from '../src/components/ControlledInput/ControlledInput';
import Input from '../src/components/Input/Input';

storiesOf('Input', module)
.add('Input With Default Value', () => <Input value="default" />)
.add('ControlledInput', () => <ControlledInput />);
