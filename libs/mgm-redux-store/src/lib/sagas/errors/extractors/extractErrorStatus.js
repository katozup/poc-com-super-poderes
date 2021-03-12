
export default function extractErrorStatus(error) {
  if (error && error.response) {
    return error.response.status;
  }
  return '';
}
