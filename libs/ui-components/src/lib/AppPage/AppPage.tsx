import React from 'react'
import { useSelector } from 'react-redux'
import './_AppPage.scss';

const AppPage = ({ children }) => {
  return (
    <div className='app-wrapper'>
      { children }
    </div>
  )
};


export default AppPage;
