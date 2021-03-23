
const urlSearchParams = new URLSearchParams(window.location.search);
const sdkDataMock = () => {
    let idParam = '00252767692';
    let dnParam = '2063';
    let cashbackParam = false;
    let nameParam = 'Matheus Barbosa de Souza';
    let breakItauTrack = false;
    const paramToBreakItauTracking = 'break-itau-track';

    if (urlSearchParams.get('id')) idParam = getSdkParamsWithoutSlashKey('id');
    if (urlSearchParams.get('dn')) dnParam = getSdkParamsWithoutSlashKey('dn');
    if (urlSearchParams.get('cashback') && urlSearchParams.get('cashback') != 'false') {
      cashbackParam = Boolean(getSdkParamsWithoutSlashKey('cashback'));
    }
    if (urlSearchParams.get(paramToBreakItauTracking) && urlSearchParams.get(paramToBreakItauTracking) != 'false') {
      breakItauTrack = Boolean(getSdkParamsWithoutSlashKey(paramToBreakItauTracking));
    }
    if (urlSearchParams.get('name')) {
      const separatorRegex = /(-)/g;
      nameParam = getSdkParamsWithoutSlashKey('name').replace(separatorRegex, ' ');
    }

    const userData = {
      chpras: idParam,
      dn: dnParam,
      token: 'token123',
      name: nameParam,
      autenticacao:
        'YuoHvkNfpiDy75+5JtFzVbvzuAvMbdAOHzCyeGQXsGsYg+CGb7Wr3+Z1eEoep2qXZFHXXG4aq3wGGKvBCnfWgJri62G77XUWTPxqVz0oLOyj81wBLEai8RIw+3kVTzrMr/F450V2oZeryTr4uLqN7h4yWmu9DnfMe0Os8JRIsapL7XdmGUjHRn3Z/TVG14gl',
      cashback: cashbackParam,
      cpfHashed: 'CPF0101MOCK',
      customerType: 'tipoMockado',
      breakItauTracking: breakItauTrack
    };
    return userData;
  };

const getSdkParamsWithoutSlashKey = (paramName: string) => {
  if (urlSearchParams.get(paramName).includes('/')) {
    return urlSearchParams.get(paramName).split('/')[0];
  }
  return urlSearchParams.get(paramName);
}

export default sdkDataMock;