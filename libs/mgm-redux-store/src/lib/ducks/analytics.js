export const Types = {
  SET_PAGE: 'analytics/SET_PAGE',
  PAGE_NAME_ITEM_CLICKED: 'analytics/PAGE_NAME_ITEM_CLICKED',
  EVENT_CATEGORY_EVENT_LABEL: 'analytics/EVENT_CATEGORY_EVENT_LABEL',
};

const INITIAL_STATE = {
  customLink: {
    pageName: '',
    itemClicked: '',
  },
  customLinkNPS: {
    eventCategory: '',
    eventLabel: '',
  },
};

export default function analyticsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PAGE_NAME_ITEM_CLICKED:
      return {
        ...state,
        customLink: {
          pageName: action.payload.pageName,
          itemClicked: action.payload.itemClicked,
        },
      };

    case Types.EVENT_CATEGORY_EVENT_LABEL:
      return {
        ...state,
        customLinkNPS: {
          eventCategory: action.payload.eventCategory,
          eventLabel: action.payload.eventLabel,
        },
      };

    case Types.SET_PAGE:
      return {
        ...state,
        page: {
          ...action.payload.page,
        },
      };

    default:
      return state;
  }
}

export const Creators = {
  addCustomLink: (analyticsParameter) => ({
    type: Types.PAGE_NAME_ITEM_CLICKED,
    payload: {
      pageName: analyticsParameter.pageName,
      itemClicked: analyticsParameter.itemClicked,
    },
  }),

  addCustomLinkNps: (analyticsParameter) => ({
    type: Types.PAGE_NAME_ITEM_CLICKED,
    payload: {
      eventCategory: analyticsParameter.eventCategory,
      eventLabel: analyticsParameter.eventLabel,
    },
  }),

  setPage: (page) => ({
    type: Types.SET_PAGE,
    payload: { page },
  }),
};
