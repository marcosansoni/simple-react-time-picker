import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as Color from './styled/colors';
import Dropdown from './Dropdown/Dropdown';

const Temp = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const ContainerTime = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  //height: fit-content;
  border-radius: 4px;
  border: 1px solid ${Color.grayLight};
  margin: 8px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: white;
  font-family: Roboto;
`;

const Selector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: ${Color.whiteDark};
  font-family: Roboto;
  border-top: 1px solid ${Color.grayLight};;
`;

const TimePicker = ({
  TwelveHours,
  onChange,
}) => {
  // Need to decide how to do with hour
  // Store always into 24h format and display different according with the choice made
  const [currentHour, setCurrentHour] = useState(moment());
  const [isAM, setIsAm] = useState(true);

  console.log(currentHour);

  console.log(moment(currentHour.hour(), 'hh'));
  // console.log(currentHour.minute());

  // hours
  const itemsHour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (!TwelveHours) {
    itemsHour.push([13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
  }

  console.log(itemsHour);

  const onChangeFromDropdown = (type, value) => {
    console.log({ type, value });
    switch (type) {
      case 'hour':
        console.log(isAM);
        setCurrentHour(moment().set('hour', isAM ? value : value + 12));
        break;
      case 'minute':
        setCurrentHour(moment().set('minute', value));
        break;
      case 'twelveHours':
        console.log(value);
        // console.log('AMMNAMAMA');
        if (value === 'AM') {
          setIsAm(true);
          setCurrentHour(moment().set('hour', currentHour.hour() - 12));
        }
        // console.log('set to false');
        if (value === 'PM') {
          setIsAm(false);
          setCurrentHour(moment().set('hour', currentHour.hour() + 12));
        }
        break;
      default:
        break;
    }
    onChange(currentHour);
  };


  return (
    <ContainerTime>
      <Title>
        Select a time,
        {' '}
        {currentHour.format('HH:mm:ss')}
      </Title>
      <Selector>
        <Dropdown
          onChange={(h) => onChangeFromDropdown('hour', h)}
          type="hour"
          items={itemsHour}
        />
        <Dropdown
          type="minute"
          onChange={(h) => onChangeFromDropdown('minute', h)}
          items={itemsHour}
        />
        {TwelveHours && (
        <Dropdown
          type="twelveHours"
          onChange={(h) => onChangeFromDropdown('twelveHours', h)}
          items={['AM', 'PM']}
        />
        )}
      </Selector>
    </ContainerTime>
  );
};

TimePicker.propTypes = {
  TwelveHours: PropTypes.bool,
  onChange: PropTypes.func,
};

TimePicker.defaultProps = {
  TwelveHours: true,
  onChange: () => {},
};

export default TimePicker;
