import React from 'react'
import './_AppPage.scss';

const AppPage = ({ children }) => {
  return (
    <div className='app-wrapper'>
      { children }
    </div>
  )
};


export default AppPage;
