
export default function extractErrorStatus(error) {
  if (error.response) {
    return error.response.status;
  }
  return '';
}
