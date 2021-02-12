import { put } from 'redux-saga/effects';

import { getSduiContent } from '@zup-mgm/utils';
import { Creators as AppActions } from '../ducks/app';

export default function* sduiContent() {
  // TODO trocaremos as vars abaixo:  
  const sduiPayload =  yield getSduiContent(
    "2030", // <- DN: Vira do SDK/MOCK
    null, // <- CHPRAS: Vira do SDK/MOCK
    "Default", // <- VERSAO: Discutir com o resto da equipe como gerenciaremos a versao, por enquanto pode deixar Default
    true, // <- CASHBACK: Discutir com a Cá de onde pegaremos no futuro essa informação
    "aXRhdTp6dXBAZGV2", // <- mgmAuth: Vira das vars de ambiente
    "fcf6c490a71a01375f2f000d3ac06d76", // <- gatewayAppKey: Vira das vars de ambiente
  );
  console.log("sduiPayload", sduiPayload);

  yield put(AppActions.setSduiContent(sduiPayload));
}
