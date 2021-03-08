import React from 'react'
import { useEffect } from 'react'
import './_AppPage.scss';


const trackPageLoad = (analytics) => {
  if(analytics && analytics.pageLoad) {
      const { pageLoad } = analytics;
      pageLoad.analyticsFunction(pageLoad.analyticsParameter);
  }
}
const AppPage = ({ children, analytics }) => {
  useEffect(() => {
    trackPageLoad(analytics);
  }, []);

  return (
    <div className='app-wrapper'>
      { children }
    </div>
  )
};


export default AppPage;
