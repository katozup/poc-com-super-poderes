export const Types = {
  SET_PAGE: 'analytics/SET_PAGE',
  PAGE_NAME_ITEM_CLICKED: 'analytics/PAGE_NAME_ITEM_CLICKED',
  EVENT_CATEGORY_EVENT_LABEL: 'analytics/EVENT_CATEGORY_EVENT_LABEL',
  PAGE_NAME: 'analytics/PAGE_NAME',
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
  pageLoad: {
    pageName: '',
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

    case Types.PAGE_NAME:
      return {
        ...state,
        pageLoad: {
          pageName: action.payload.pageName,
        },
      };

    case Types.SET_PAGE:
      return {
        ...state,
        pageLoad: {
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

  addPageLoad: (page) => ({
    type: Types.PAGE_NAME,
    payload: { page },
  }),
};
