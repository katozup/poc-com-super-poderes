import React from 'react'
import './_AppPage.scss';
import { useSelector } from 'react-redux'

const AppPage = ({ children, className }) => {
  const counter = useSelector(state => state.counter)

  return (
    <div className='app-wrapper'>
      { children }
    </div>
  )
};


export default AppPage;
