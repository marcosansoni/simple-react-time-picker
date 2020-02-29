import React from 'react';
import PropTypes from 'prop-types';

import * as Color from '../../styled/colors';


const UpArrow = ({
  color,
  dimensions,
}) => (
  <svg width={dimensions} height={dimensions} viewBox="0 0 551.13 551.13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m275.565 189.451 223.897 223.897h51.668l-275.565-275.565-275.565 275.565h51.668z"
      fill={color}
    />
  </svg>

);

UpArrow.propTypes = {
  color: PropTypes.string,
  dimensions: PropTypes.number,
};

UpArrow.defaultProps = {
  color: Color.grayDark,
  dimensions: 18,
};


export default UpArrow;
