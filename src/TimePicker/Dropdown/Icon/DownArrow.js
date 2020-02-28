import React from 'react';
import PropTypes from 'prop-types';

import * as Color from '../../styled/colors';


const DownArrow = ({
  color,
  dimensions,
}) => (
  <svg width={dimensions} height={dimensions} viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M477.7,347.8L477.7,347.8c-2.6-1.8-4.6-3.7-6.1-5.9L163.4,50c-10.1-9.5-8.5-23.9,3.5-31.9l4.1-2.8c12-8,30.1-6.8,40.2,2.8L500,291.6L788.8,18.1c10.1-9.5,28.2-10.8,40.2-2.8l4.1,2.8c12,8,13.6,22.4,3.5,31.9L528.5,342c-1.6,2.2-3.6,4.1-6.1,5.8l-0.1,0.1c-5.7,5.4-13.9,8.1-22.2,8.1C491.6,356,483.3,353.2,477.7,347.8L477.7,347.8z"
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
  dimensions: 24,
};


export default DownArrow;
