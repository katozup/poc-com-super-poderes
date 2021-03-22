import React, { useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Loading from '../Loading/Loading';
import './_AppPage.scss';

const AppPage = ({ children, analytics, backgroundImage }) => {
  const loading = useSelector((state: RootStateOrAny) => state.app.loading);
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

  if (loading) {
    return <Loading loadPrimary={false} />;
  }

  return (
    <div>
      <div className='app-wrapper'>{children}</div>
    </div>
  );
};

export default AppPage;
