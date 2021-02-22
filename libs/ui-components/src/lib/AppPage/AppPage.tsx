import React from 'react'
import { useSelector } from 'react-redux'
import './_AppPage.scss';

const AppPage = ({ children }) => {
  // const result = useSelector(state => state.counter)
  // console.log('result', result)
  return (
    <div className='app-wrapper'>
      { children }
    </div>
  )
};


export default AppPage;
