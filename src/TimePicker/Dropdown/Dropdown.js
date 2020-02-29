import React, { useState } from 'react';
import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import * as Color from '../styled/colors';
import DownArrow from './Icon/DownArrow';
import UpArrow from './Icon/UpArrow';

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
  overflow-y: auto;
`;

const Cell = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //width: fit-content;
  background-color: ${Color.white};
  padding: 12px 16px 12px 16px;
  border-bottom: 1px solid ${Color.grayLight};
  box-sizing: border-box;
  cursor:pointer;
  
  :last-child{
    border-bottom: none;
  }
`;

const Dropdown = ({
  items,
}) => {
  const [open, setOpen] = useState(false);
  const [indexSelectedItem, setIndexSelectedItem] = useState(0);

  const cells = items && items.length > 0 && items.map((i, index) => index !== indexSelectedItem
    && (
    <Cell
      onClick={() => {
        setOpen(false);
        setIndexSelectedItem(index);
      }}
    >
      {i}
    </Cell>
    ));

  return (
    <>
      <Box onClick={() => setOpen(!open)}>
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
          <PerfectScrollbar>
            {cells}
          </PerfectScrollbar>
        </DropMenu>
        )}
      </Box>

    </>
  );
};

export default Dropdown;
