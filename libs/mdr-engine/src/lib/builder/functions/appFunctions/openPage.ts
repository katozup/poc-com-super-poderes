import { navigationHistory } from '@zup-mgm/utils';
import { appActions, store} from '@zup-mgm/mgm-redux-store'

const openPage = (url) => {
  const currentPath = navigationHistory.location.pathname;
  if(currentPath !== url){
    navigationHistory.push(url);
  }
}

export default function (onClick) {
  const { actionParameter } = onClick;
  const { url, analytics } = actionParameter;
  
  store.dispatch(appActions.setAction(onClick));
  store.dispatch(appActions.startLoading());
  openPage(url);
  
  if (analytics) {
    analytics.analyticsFunction(analytics.analyticsParameter);
  }
  return;
}
