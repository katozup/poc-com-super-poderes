import { select, put } from 'redux-saga/effects';

import verifyString from '../../util/verifyString';
import { Creators as AnalyticsActions } from '../ducks/analytics';

export function* addProduct() {
  const { brand, portfolio, minimumIncome, variant, name, sku } = yield select(
    state => state.whiteLabel
  );

  const item = {
    merchandising: {
      'cdc:bandeira': brand,
      'cdc:portfolio': portfolio,
      'cdc:rendaminima': verifyString('[R$]', minimumIncome)
        ? minimumIncome
        : '0',
      'cdc:variante': variant,
    },
    nome: name,
    sku,
  };

  if (sku && portfolio) {
    yield put(AnalyticsActions.addProduct(item));
  }
}

export function* setCustom() {
  const { brand, variant, name, dn } = yield select(state => state.whiteLabel);

  const custom = {
    cartaoDn: dn != null ? dn : '0',
    cartaoVariante: variant || '',
    cartaoNome: name || '',
    cartaoBandeira: brand || '',
  };

  yield put(AnalyticsActions.setCustom(custom));
}
