import React from 'react';

import './_ImageCardDetails.scss';

export function ImageCardDetails({ children }) {
  return (
    <div className='card-main-container'>
      <div className='card-info-container'>
        <div className='card-content-container'>
          <div className="card-content-values">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default ImageCardDetails;
