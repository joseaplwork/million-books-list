import React from 'react';
import { palette } from 'config';

const { gulfBlue } = palette;
const ArrowDown = ({ size = 20, color = gulfBlue, inverted = false }) => {
  const styles = {
    transformOrigin: 'center',
    transform: inverted ? 'rotate3d(0, 0, 0, 0deg)' : 'rotate3d(0, 0, 1, -180deg)'
  };

  return (
    <svg width={size} viewBox="0 0 386.257 386.257">
    	 <polygon style={styles} fill={color} points="0,96.879 193.129,289.379 386.257,96.879 "/>
    </svg>
  );
};

export default ArrowDown;
