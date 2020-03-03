import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as Color from './styled/colors';
import Dropdown from './Dropdown/Dropdown';

const ContainerTime = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.mobile ? '100%' : 'fit-content')};
  height: ${(props) => (props.mobile ? '100%' : 'fit-content')};
  border-radius: 4px;
  border: ${(props) => !props.mobile && `1px solid ${Color.grayLight}`};
  margin: ${(props) => !props.mobile && '8px'};
  box-shadow: ${(props) => !props.mobile && '0px 4px 16px rgba(0, 0, 0, 0.12)'};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: white;
  font-family: Roboto;
  height: ${(props) => (props.mobile && '25%')};
`;

const Selector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.mobile || props.vertical) && 'column'};
  padding: 24px;
  background-color: ${Color.whiteDark};
  font-family: Roboto, Serif;
  border-top: ${(props) => !props.withoutTitle && `1px solid ${Color.grayLight}`};
  height: ${(props) => (props.mobile && '75%')};
`;

const TimePicker = ({
  TwelveHours,
  onChange,
  title,
  withoutTitle,
  mobile,
  vertical,
  textCentered,
}) => {
  // Need to decide how to do with hour
  // Store always into 24h format and display different according with the choice made
  const [currentHour, setCurrentHour] = useState(moment());
  const [isAM, setIsAm] = useState(TwelveHours ? currentHour.format('HH') < 12 : true);

  const twelve = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const twentyfour = Array.from(Array(24).keys());

  const itemsHour = TwelveHours ? twelve : twentyfour;


  const onChangeFromDropdown = (type, value) => {
    const temporaryHour = moment(currentHour);
    switch (type) {
      case 'hour':
        if (TwelveHours) {
          temporaryHour.set('hour', isAM ? value % 12 : ((value % 12) + 12));
        } else {
          temporaryHour.set('hour', value);
        }
        break;
      case 'minute':
        temporaryHour.set('minute', value);
        break;
      case 'twelveHours':
        if (value === 'AM') {
          setIsAm(true);
          temporaryHour.set('hour', currentHour.hour() - 12);
        }
        if (value === 'PM') {
          setIsAm(false);
          temporaryHour.set('hour', currentHour.hour() + 12);
        }
        break;
      default:
        break;
    }
    setCurrentHour(temporaryHour);
    onChange(temporaryHour);
  };


  return (
    <ContainerTime
      mobile={mobile}
    >
      {!withoutTitle && (
      <Title
        mobile={mobile}
      >
        {title || 'Select a time'}
      </Title>
      )}
      <Selector
        withoutTitle={withoutTitle}
        mobile={mobile}
        vertical={vertical}
      >
        <Dropdown
          width={mobile && '100%'}
          centered={mobile || textCentered}
          onChange={(h) => onChangeFromDropdown('hour', h)}
          type="hour"
          items={itemsHour}
          defaultIndex={TwelveHours ? currentHour.format('h') % 12 : Number(currentHour.format('HH'))}
        />
        <Dropdown
          width={mobile && '100%'}
          centered={mobile || textCentered}
          type="minute"
          onChange={(h) => onChangeFromDropdown('minute', h)}
          items={Array.from(Array(60).keys())}
          defaultIndex={Number(currentHour.format('mm'))}
        />
        {TwelveHours && (
        <Dropdown
          width={mobile && '100%'}
          centered={mobile || textCentered}
          type="twelveHours"
          onChange={(h) => onChangeFromDropdown('twelveHours', h)}
          items={['AM', 'PM']}
          defaultIndex={isAM ? 0 : 1}
        />
        )}
      </Selector>
    </ContainerTime>
  );
};

TimePicker.propTypes = {
  TwelveHours: PropTypes.bool,
  onChange: PropTypes.func,
  title: PropTypes.string,
  withoutTitle: PropTypes.bool,
  mobile: PropTypes.bool,
  vertical: PropTypes.bool,
  textCentered: PropTypes.bool,
};

TimePicker.defaultProps = {
  TwelveHours: true,
  onChange: () => {},
  title: null,
  withoutTitle: false,
  mobile: false,
  vertical: false,
  textCentered: false,
};

export default TimePicker;
