export default function setLocalStorageQueryParams(paramsArray) {
  const params = new URL(document.location).searchParams;

  paramsArray.forEach(paramId => {
    const paramValue = params.get(paramId);
    localStorage.setItem(paramId, paramValue);
  });
}
