import shared from './shared';

const homolog = {
  ENVIRONMENT: 'homolog',
  HAS_EXPERIMENT: false,
  TURN_GOOGLE_ANALYTICS_ON: true,
  GATEWAY_HOST: 'https://itau-k8s.staging.gateway.zup.me',
  GATEWAY_APP_KEY: '464cc22084ba01375c30000d3ac06d76',
  DEBUG_MODE: true,
  // PUBLIC_URL: 'https://itau-mgm-promoter-itaucard-hml.continuousplatform.com/',
};

export default {
  ...shared,
  ...homolog,
};
