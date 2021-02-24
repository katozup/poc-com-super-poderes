import { call, put, select } from 'redux-saga/effects';
import { Creators as AnalyticsActions } from '../ducks/analytics';

function* addProduct() {
  const { sku, portfolio } = yield select((state) => state.app.sduiPayload);
  const { dn, cardName, cardVariant, cardFlag } = yield select(
    (state) => state.sdk
  );

  const item = {
    merchandising: {
      'cdc:cartaodn': dn || '0',
      'cdc:bandeira': cardFlag || '',
      'cdc:portfolio': portfolio || '',
      'cdc:rendaminima': '0',
      'cdc:variante': cardVariant || '',
    },
    nome: cardName,
    sku,
  };

  yield put(AnalyticsActions.addProduct(item));
}

function* setCustom() {
  const { dn, cardVariant, cardName, cardFlag } = yield select(
    (state) => state.sdk
  );

  const custom = {
    cartaoDn: dn || '0',
    cartaoVariante: cardVariant || '',
    cartaoNome: cardName || '',
    cartaoBandeira: cardFlag || '',
  };

  yield put(AnalyticsActions.setCustom(custom));
}

function* setVisitor() {
  const { cpfHashed, customerType } = yield select((state) => state.sdk);
  const visitor = {
    iDPF: cpfHashed,
    tipoCliente: customerType,
  };

  yield put(AnalyticsActions.setVisitor(visitor));
}

export default function* setAnalyticsInformation() {
  const { hasProduct } = yield select((state) => state.analytics);
  if (hasProduct) yield call(addProduct);
  yield call(setCustom);
  yield call(setVisitor);
}
