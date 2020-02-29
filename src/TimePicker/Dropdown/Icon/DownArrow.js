import React from 'react';
import PropTypes from 'prop-types';

import * as Color from '../../styled/colors';


const DownArrow = ({
  color,
  dimensions,
}) => (
  <svg width={dimensions} height={dimensions} viewBox="0 0 551.13 551.13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m275.565 361.679-223.897-223.896h-51.668l275.565 275.565 275.565-275.565h-51.668z"
      fill={color}
    />
  </svg>

);

DownArrow.propTypes = {
  color: PropTypes.string,
  dimensions: PropTypes.number,
};

DownArrow.defaultProps = {
  color: Color.grayDark,
  dimensions: 18,
};


export default DownArrow;
