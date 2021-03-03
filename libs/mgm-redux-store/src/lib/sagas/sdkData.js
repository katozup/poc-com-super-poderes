import { getUserData } from '@zup-mgm/utils'
import { put, select } from 'redux-saga/effects';
import { Creators as sdkActions } from '../ducks/sdk';
import { Creators as appActions } from '../ducks/app';
import { CARD_TYPE } from '../../../../utils/src/lib/constants';

const resolveCardType = (userData) => {
  if(userData.flowByHipercardApp) return CARD_TYPE.HIPERCARD;  
  if (userData.flowByCartaoLuizaApp) return CARD_TYPE.LUIZACARD;

  return userData.cardType;
}

export default function* setSdkData() {
  try {
    const { cardType } = yield select(state => state.app);
    const userData = yield getUserData();
    if(!userData.cardType){
      userData.cardType = cardType;
      userData.cardType = resolveCardType(userData);
    }
    yield put(sdkActions.sdkReducer(userData));
    yield put(appActions.setCardType(userData.cardType));
  } catch (error) {
    return console.log(error);
  }
}
