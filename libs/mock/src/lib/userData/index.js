export const userDataMock = () => {
    const params = new URLSearchParams(window.location.search);
    let idParam = '00252767692';
    let dnParam = '2063';
    let cashbackParam = 'false';
    let nameParam = 'Matheus Barbosa de Souza';
  
    if (params.get('id')) idParam = params.get('id');
    if (params.get('dn')) dnParam = params.get('dn');
    if (params.get('cashback')) cashbackParam = params.get('cashback');
    if (params.get('name')) {
      const separatorRegex = /(-)/g;
      nameParam = params.get('name').replace(separatorRegex, ' ');
    }
  
    const userData = {
      chpras: idParam,
      dn: dnParam,
      token: 'token123',
      name: nameParam,
      lastDigits: '0001',
      cpf: 86277191012,
      autenticacao:
        'YuoHvkNfpiDy75+5JtFzVbvzuAvMbdAOHzCyeGQXsGsYg+CGb7Wr3+Z1eEoep2qXZFHXXG4aq3wGGKvBCnfWgJri62G77XUWTPxqVz0oLOyj81wBLEai8RIw+3kVTzrMr/F450V2oZeryTr4uLqN7h4yWmu9DnfMe0Os8JRIsapL7XdmGUjHRn3Z/TVG14gl',
      customerId: 'dsf6ad8s796sd7f896s',
      cardVariant: 'Reembolso',
      cardName: 'Cartão Mockado',
      cardFlag: 'Visa',
      featureCashback: cashbackParam,
      cpfHashed: 'CPF0101MOCK',
      customerType: 'tipoMockado',
    };
    return userData;
  };
  