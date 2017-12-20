import React from 'react';
import './style.css';

const FloatingLoading = ({ show }) => {
  const className = show ? 'FloatingLoading-wrapper show' : 'FloatingLoading-wrapper';
 
  return (
    <div className={className}>
      <div className="FloatingLoading-showbox">
        <div className="FloatingLoading-loader">
          <svg className="FloatingLoading-circular" viewBox="25 25 50 50">
            <circle className="FloatingLoading-path" cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FloatingLoading;
