import shared from './shared';

const quality = {
  ENVIRONMENT: 'quality',
  HAS_EXPERIMENT: false,
  TURN_GOOGLE_ANALYTICS_ON: true,
  GATEWAY_HOST: 'https://itau-k8s.staging.gateway.zup.me',
  GATEWAY_APP_KEY: '464cc22084ba01375c30000d3ac06d76',
  DEBUG_MODE: true,
  // PUBLIC_URL: 'https://itau-mgm-promoter-itaucard-qa.continuousplatform.com/',
};

export default {
  ...shared,
  ...quality,
};
