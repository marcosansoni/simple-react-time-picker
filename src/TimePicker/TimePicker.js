import React from 'react';
import styled from 'styled-components';
import * as Color from './styled/colors';
import Dropdown from './Dropdown/Dropdown';
import DownArrow from './Dropdown/Icon/DownArrow';

const Temp = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const ContainerTime = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
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

const TimePicker = () => {
  const a = 5;
  return (
        <ContainerTime>
          <Title>
            Select a time
          </Title>
          <Selector>
            <Dropdown
              items={[1, 2, 3, 4]}
            />
          </Selector>
        </ContainerTime>
  );
};

export default TimePicker;
