import React from 'react'
import './_ButtonListContent.scss';

const ButtonListContent = ({ children, image }) => (
  <>
    <div className="button-list-content">
      { children }
    </div>
    {/* <img src={image}></img> */}
  </>
);

export default ButtonListContent;
