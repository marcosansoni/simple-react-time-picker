import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import TimePicker from './TimePicker';

const Container = styled.div`
  position: absolute;
  left: 16px;
  top: 16px;
  display: flex;
  padding: 32px;
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  background-color: #F7F7F7;
  border-radius: 4px;
  overflow: hidden;
  box-sizing: border-box;
`;

const ContainerMobile = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #F7F7F7;
  overflow: hidden;
`;

const stories = storiesOf('Time Picker', module);


stories.add('12 Hour Format', () => (
  <Container>
    <TimePicker
      onChange={(time) => alert(time.format('HH:mm'))}
    />
  </Container>
));

stories.add('24 Hour Format', () => (
  <Container>
    <TimePicker
      TwelveHours={false}
      onChange={(time) => alert(time.format('HH:mm'))}
    />
  </Container>
));

stories.add('Custom Title', () => (
  <Container>
    <TimePicker
      title="Custom Title"
      onChange={(time) => alert(time.format('HH:mm'))}
    />
  </Container>
));

stories.add('Without Title', () => (
  <Container>
    <TimePicker
      withoutTitle
      onChange={(time) => alert(time.format('HH:mm'))}
    />
  </Container>
));

stories.add('Mobile', () => (
  <ContainerMobile>
    <TimePicker
      mobile
      onChange={(time) => alert(time.format('HH:mm'))}
    />
  </ContainerMobile>
));

stories.add('Vertical', () => (
  <Container>
    <TimePicker
      vertical
      onChange={(time) => alert(time.format('HH:mm'))}
    />
  </Container>
));

stories.add('Text Centered', () => (
  <Container>
    <TimePicker
      textCentered
      onChange={(time) => alert(time.format('HH:mm'))}
    />
  </Container>
));
