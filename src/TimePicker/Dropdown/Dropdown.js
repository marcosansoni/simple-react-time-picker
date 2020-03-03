import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import * as Color from '../styled/colors';
import DownArrow from './Icon/DownArrow';
import UpArrow from './Icon/UpArrow';

import 'react-perfect-scrollbar/dist/css/styles.css';
import moment from 'moment';


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
  width: ${(props) => props.width && props.width};
`;

const ItemDisplayed = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.centered && 'center'};
  height: 100%;
  width: calc(100% - 18px);
`;

const Icon = styled.div`
  width: 18px;
  height: 100%;
  display: flex;
  align-items: center;
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
  z-index: 5;
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
  defaultIndex,
  width,
  centered,
}) => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [indexSelectedItem, setIndexSelectedItem] = useState(defaultIndex);

  const refBox = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      onChange(items[indexSelectedItem]);
    }
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
      {String(i).padStart(2, '0')}
    </Cell>
  ));

  return (
    <>
      <Box
        width={width}
        tabIndex="0"
        ref={refBox}
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
      >
        <ItemDisplayed
          centered={centered}
          onFocus={() => console.log('3')}
        >
          {String(items[indexSelectedItem]).padStart(2, '0')}
        </ItemDisplayed>
        <Icon
          onFocus={() => console.log('4')}
        >
          {!open
            ? (<DownArrow />)
            : (<UpArrow />)}
        </Icon>
        {open
          && items
          && items.length > 0
          && (
          <DropMenu
            onFocus={() => console.log('1')}
          >
            <ContainerPerfectScrollBar
              items={items}
              onFocus={() => console.log('2')}
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
  defaultIndex: PropTypes.number,
  width: PropTypes.string,
  centered: PropTypes.bool,
};

Dropdown.defaultProps = {
  onChange: () => {},
  defaultIndex: 0,
  width: '96px',
  centered: false,
};

export default Dropdown;
