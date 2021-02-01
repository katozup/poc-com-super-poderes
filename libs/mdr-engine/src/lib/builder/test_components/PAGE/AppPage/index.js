import React from 'react'
import './_AppPage.scss';
import { useSelector } from 'react-redux'

const AppPage = ({ children }) => {
  const counter = useSelector(state => state.counter)

  return (
    <div className="app-wrapper">
      redux counter: {counter.counter}
      { children }
    </div>
  )
};


export default AppPage;
