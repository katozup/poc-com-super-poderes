
export default function extractEndpointUrlWithError(error) {
  if (error && error.response && error.response.config) {
    return error.response.config.url;
  }
  return '';
}
