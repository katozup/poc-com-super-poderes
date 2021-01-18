import React from 'react'
import './_AppPage.scss';
import { useSelector } from 'react-redux'

const AppPage = ({ children }) => {
  const counter = useSelector(state => state.analytics)
  console.log('asd', counter)

  return (
    <div className="app-wrapper">
      { children }
    </div>
  )
};


export default AppPage;
