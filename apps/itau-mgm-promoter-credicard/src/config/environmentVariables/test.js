import shared from './shared';

const test = {
  ENVIRONMENT: 'test',
  HAS_EXPERIMENT: false,
  TURN_GOOGLE_ANALYTICS_ON: false,
  GATEWAY_HOST: 'https://itau-k8s.dev.gateway.zup.me',
  GATEWAY_APP_KEY: '3e5cd12084ba01375c2e000d3ac06d76',
  DEBUG_MODE: true,
  PUBLIC_URL: 'http://localhost:3000',
};

export default {
  ...shared,
  ...test,
};
