import React from 'react';
import { useEffect } from 'react';
import './_AppPage.scss';

const AppPage = ({ children, analytics, backgroundImage }) => {
  const trackPageLoad = (analytics) => {
    if (analytics) {
      analytics.analyticsFunction(analytics.analyticsParameter);
    }
  };

  useEffect(() => {
    trackPageLoad(analytics);
  }, []);

  if (backgroundImage) {
    return (
      <div
        className='app-wrapper background-image'
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {children}
      </div>
    );
  }
  
  return (
    <div>
      <div className='app-wrapper'>{children}</div>
    </div>
  );
};

export default AppPage;
