import shared from './shared';

const production = {
  ENVIRONMENT: 'production',
  HAS_EXPERIMENT: false,
  TURN_GOOGLE_ANALYTICS_ON: true,
  GATEWAY_HOST: 'https://itau-k8s-cartoes-commons.gateway.zup.me/',
  GATEWAY_APP_KEY: '50b5b37084ba01375c32000d3ac06d76',
  DEBUG_MODE: false,
  // PUBLIC_URL: 'https://itau-mgm-promoter-itaucard.continuousplatform.com/',
};

export default {
  ...shared,
  ...production,
};
