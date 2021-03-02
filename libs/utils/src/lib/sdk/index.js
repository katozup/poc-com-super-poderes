import { sdkDataMock } from '../../../../mock/src/lib/sdkData/index';
import getSDKItem from '../../lib/applicationActions/sdk/getSDKItem';
import getFirstName from '../../../../utils/src/lib/applicationActions/sdk/getFirstName';

export const getUserData = async () => {

  const params = new URLSearchParams(window.location.search);
  const sdkParam = params.get('sdk');

  if (sdkParam === false || sdkParam === 'false') {
    const userData = sdkDataMock();
    userData.name = getFirstName(userData.name);

    const cardTypeParam = params.get('app');
    userData.cardType = cardTypeParam;
    
    return userData;
  }

  const cpf = await getSDKItem('CUSTOMER_CPF');
  const autenticacao = await getSDKItem('MGM_AUTHENTICATION');
  const customerId = await getSDKItem('CUSTOMER_ID');
  const cardVariant = await getSDKItem('CARD_VARIANT');
  const cardName = await getSDKItem('CARD_NAME');
  const cardFlag = await getSDKItem('CARD_FLAG');
  const dn = await getSDKItem('DN');
  const name = getFirstName(await getSDKItem('CUSTOMER_NAME'));
  const chpras = await getSDKItem('CHPRAS');
  const cpfHashed = await getSDKItem('CPF_HASHED');
  const customerType = await getSDKItem('CUSTOMER_TYPE');
  let featureCashback = await getSDKItem('CASHBACK');
  const flowByHipercardApp = await getSDKItem("HIPERCARD");
  const flowByCartaoLuizaApp = await getSDKItem("CARTAOLUIZA");

  if (featureCashback == null) {
    featureCashback = false;
  }

  const lastDigits = await getSDKItem('LAST_FOUR_CHARACTERS');
  const userData = {
    cpf,
    autenticacao,
    chpras,
    dn,
    name,
    customerId,
    cardVariant,
    cardName,
    cardFlag,
    lastDigits,
    featureCashback,
    cpfHashed,
    customerType,
    flowByHipercardApp,
    flowByCartaoLuizaApp
  };

  return userData;
};
