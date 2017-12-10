import React from 'react';

const Placeholder = ({ style, title }) => {
  const tag = title
  ? <text x="86.1" y="15" width="292" height="16.31" fill="#eee" fontSize="20" fontWeight="bold">{title}</text>
  : <rect fill="#eee" x="86.1" y="1.3" width="292" height="16.31"/>;

  return (
    <div className="BooksListItem BooksListItem-placeholder" style={style}>
      <div className="BooksListItem-card">
        <svg width="100%" height="100%" viewBox="0 0 378.1 92.1">
          <circle fill="#eee" cx="34.3" cy="34.25" r="34.25"/>
          <rect fill="#eee" y="82.1" width="67.94" height="10"/>
          <circle fill="#eee" cx="95.37" cy="81.64" r="8.51"/>
          <rect fill="#eee" x="113.78" y="76.29" width="89.32" height="10"/>
          {tag}
          <rect fill="#eee" x="86.56" y="38.83" width="158.54" height="12.27"/>
        </svg>
      </div>
    </div>
  );
}

export default Placeholder;
