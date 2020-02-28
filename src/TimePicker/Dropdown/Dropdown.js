import React from 'react';
import styled from "styled-components";
import * as Color from "../styled/colors";
import DownArrow from "./Icon/DownArrow";
import UpArrow from "./Icon/UpArrow";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //width: fit-content;
  min-width: 32px;
  border-radius: 4px;
  background-color: ${Color.white};
  padding: 8px;
  border: 1px solid ${Color.grayLight};
`;

const ItemDisplayed = styled.div`
  font-size: 16px;
`;



const Dropdown = ({
  items,
}) => {
  const a = 5;
  return (
    <div>
      <Box>
        <ItemDisplayed>
        {items[0]}
        </ItemDisplayed>
        <ItemDisplayed>
          <DownArrow />
          <UpArrow />
        </ItemDisplayed>
      </Box>
    </div>
  );
};

export default Dropdown;
