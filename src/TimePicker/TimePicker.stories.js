import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import TimePicker from './TimePicker';

const Container = styled.div`
  position: absolute;
  left: 16px;
  top: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  background-color: #F7F7F7;
  border-radius: 4px;
`;

const stories = storiesOf('Time Picker', module);


stories.add('Default', () => (
  <Container>
    <TimePicker />
  </Container>
));
