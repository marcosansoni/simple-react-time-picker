import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import * as Color from '../styled/colors';
import DownArrow from './Icon/DownArrow';
import UpArrow from './Icon/UpArrow';

import 'react-perfect-scrollbar/dist/css/styles.css';


const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //width: fit-content;
  min-width: 96px;
  height: 44px;
  border-radius: 4px;
  background-color: ${Color.white};
  padding: 8px 16px 8px 16px;
  border: 1px solid ${Color.grayLight};
  margin: 8px;
  box-sizing: border-box;
  cursor:pointer;
`;

const ItemDisplayed = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  height: 100%;
`;

const DropMenu = styled.div`
  position: absolute;
  top: 42px;
  left: 0;
  width: 100%;
  max-height: 150px; 
  background-color: ${Color.white};
  border: 1px solid ${Color.grayLight};
  box-sizing: border-box;
  //overflow: hidden;
`;

const Cell = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  //width: fit-content;
  background-color: ${(props) => (props.isSelected ? Color.whiteDark : Color.white)};
  padding: 12px 16px 12px 16px;
  border-bottom: ${(props) => !props.isLast && `1px solid${Color.grayLight}`};
  box-sizing: border-box;
  cursor:pointer;
 
`;

const ContainerPerfectScrollBar = styled.div`
  position: relative;
  width: 100%;
  max-height: 131px;
  height: ${(props) => (props.items.length > 3 ? '131px' : 'auto')};
`;

const Dropdown = ({
  items,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [indexSelectedItem, setIndexSelectedItem] = useState(0);

  console.log(items)

  useEffect(() => {
    console.log('Changed into ', items[indexSelectedItem]);
    onChange(items[indexSelectedItem]);
  }, [indexSelectedItem]);

  const cells = items && items.length > 0 && items.map((i, index) => (
    <Cell
      onClick={() => {
        setOpen(false);
        setIndexSelectedItem(index);
      }}
      key={index}
      isLast={index === items.length - 1}
      isSelected={index === indexSelectedItem}
    >
      {i}
    </Cell>
  ));

  return (
    <>
      <Box
        onClick={() => setOpen(!open)}
      >
        <ItemDisplayed>
          {items[indexSelectedItem]}
        </ItemDisplayed>
        <ItemDisplayed>
          {!open
            ? (<DownArrow />)
            : (<UpArrow />)}
        </ItemDisplayed>
        {open
          && items
          && items.length > 0
          && (
          <DropMenu>
            <ContainerPerfectScrollBar
              items={items}
            >
              <PerfectScrollbar>
                {cells}
              </PerfectScrollbar>
            </ContainerPerfectScrollBar>
          </DropMenu>
          )}
      </Box>

    </>
  );
};

Dropdown.propTypes = {
  onChange: PropTypes.func,
};

Dropdown.defaultProps = {
  onChange: () => {},
};

export default Dropdown;
