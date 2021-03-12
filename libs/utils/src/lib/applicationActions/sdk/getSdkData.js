import { sdkDataMock } from '@zup-mgm/mock';
import getFirstName from './getFirstName';
import getSDKItem from './getSDKItem';

const getSdkData = async () => {
  const params = new URLSearchParams(window.location.search);
  const sdkParam = params.get('sdk');

  if (sdkParam === false || sdkParam === 'false') {
    const userData = sdkDataMock();
    userData.name = getFirstName(userData.name);

    const cardTypeParam = params.get('app');
    userData.cardType = cardTypeParam;

    return userData;
  }

  const autenticacao = await getSDKItem('MGM_AUTHENTICATION');
  const dn = await getSDKItem('DN');
  const name = getFirstName(await getSDKItem('CUSTOMER_NAME'));
  const chpras = await getSDKItem('CHPRAS');
  const cpfHashed = await getSDKItem('CPF_HASHED');
  const customerType = await getSDKItem('CUSTOMER_TYPE');
  let featureCashback = await getSDKItem('CASHBACK');
  const flowByHipercardApp = await getSDKItem('HIPERCARD');
  const flowByCartaoLuizaApp = await getSDKItem('CARTAOLUIZA');

  if (featureCashback == null) {
    featureCashback = false;
  }

  const userData = {
    autenticacao,
    chpras,
    dn,
    name,
    featureCashback,
    cpfHashed,
    customerType,
    flowByHipercardApp,
    flowByCartaoLuizaApp,
  };

  return userData;
};

export default getSdkData;
