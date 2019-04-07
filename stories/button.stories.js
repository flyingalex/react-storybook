import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../src/components/Button/Button';

storiesOf('Button', module)
.add('Normal Button', () => <Button text="默认按钮" />)
.add('Primary Button', () => <Button text="默认按钮" clsname="primary" />);
