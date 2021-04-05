import React, { useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Loading from '../Loading/Loading';
import './_AppPage.scss';
import { ANALYTICS_RULES } from '@zup-mgm/utils';

const { PAGE } = ANALYTICS_RULES;

const AppPage = ({ children, analytics, backgroundImage }) => {
  const loading = useSelector((state: RootStateOrAny) => state.app.loading);
  const { pageLoad } = useSelector((state: RootStateOrAny) => state.app);
  const canDispatchPageLoad = (pageLoad) => pageLoad[PAGE];
  
  useEffect(() => {
    const trackPageLoad = (analytics) => {
      if (analytics && canDispatchPageLoad(pageLoad)) {
        analytics.analyticsFunction(analytics.analyticsParameter);
      }
    };

    trackPageLoad(analytics);
  }, [analytics, pageLoad[PAGE]]);

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
