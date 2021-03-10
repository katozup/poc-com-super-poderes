export const sdkDataMock = () => {
    const params = new URLSearchParams(window.location.search);
    let idParam = '00252767692';
    let dnParam = '2063';
    let cashbackParam = false;
    let nameParam = 'Matheus Barbosa de Souza';
    let breakItauTrack = false;
    const paramToBreakItauTracking = 'break-itau-track';

    if (params.get('id')) idParam = params.get('id');
    if (params.get('dn')) dnParam = params.get('dn');
    if (params.get('cashback') && params.get('cashback') != 'false') {
      cashbackParam = Boolean(params.get('cashback'));
    }
    if (params.get(paramToBreakItauTracking) && params.get(paramToBreakItauTracking) != 'false') {
      breakItauTrack = Boolean(params.get(paramToBreakItauTracking));
    }
    if (params.get('name')) {
      const separatorRegex = /(-)/g;
      nameParam = params.get('name').replace(separatorRegex, ' ');
    }

    const userData = {
      chpras: idParam,
      dn: dnParam,
      token: 'token123',
      name: nameParam,
      cpf: 86277191012,
      autenticacao:
        'YuoHvkNfpiDy75+5JtFzVbvzuAvMbdAOHzCyeGQXsGsYg+CGb7Wr3+Z1eEoep2qXZFHXXG4aq3wGGKvBCnfWgJri62G77XUWTPxqVz0oLOyj81wBLEai8RIw+3kVTzrMr/F450V2oZeryTr4uLqN7h4yWmu9DnfMe0Os8JRIsapL7XdmGUjHRn3Z/TVG14gl',
      cashback: cashbackParam,
      cpfHashed: 'CPF0101MOCK',
      customerType: 'tipoMockado',
      breakItauTracking: breakItauTrack
    };
    return userData;
  };
