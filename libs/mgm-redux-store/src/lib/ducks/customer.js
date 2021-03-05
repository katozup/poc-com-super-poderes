export const Types = {
  GET_REFERRALS: 'customer/GET_REFERRALS',
  SET_REFERRALS: 'customer/SET_REFERRALS',
};

export const initialState = {
  referrals: {
    sharedAmount: null,
    proposals: null,
    approvedProposals: null,
    hasAvaiableCoupon: false,
  },
};

export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_REFERRALS:
      return {
        ...state,
        referrals: {
          sharedAmount: action.payload.referrals.compartilhamentos,
          proposals: action.payload.referrals.propostas,
          approvedProposals: action.payload.referrals.propostasAprovadas,
          hasAvaiableCoupon: action.payload.referrals.beneficioLiberado,
        },
      };

    default:
      return state;
  }
}

export const Creators = {
  getReferrals: () => ({
    type: Types.GET_REFERRALS,
  }),

  setReferrals: referrals => ({
    type: Types.SET_REFERRALS,
    payload: { referrals },
  }),
};
