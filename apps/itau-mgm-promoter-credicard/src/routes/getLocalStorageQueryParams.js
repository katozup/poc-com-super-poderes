export default function getLocalStorageQueryParams(paramsArray) {
  let result = '';

  paramsArray.forEach(paramId => {
    const paramValue = localStorage.getItem(paramId);
    result += `&${paramId}=${paramValue}`;
  });

  return `?${result}`;
}
