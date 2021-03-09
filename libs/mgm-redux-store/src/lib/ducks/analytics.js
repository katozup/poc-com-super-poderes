import {CustomLink} from './model/CustomLink';
import {CustomLinkNps} from './model/CustomLinkNps';

export const Types = {
  PAGE_NAME_ITEM_CLICKED: 'analytics/PAGE_NAME_ITEM_CLICKED',
  EVENT_CATEGORY_EVENT_LABEL: 'analytics/EVENT_CATEGORY_EVENT_LABEL',
  PAGE_LOAD: 'analytics/PAGE_LOAD',
};

const INITIAL_STATE = {
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
        }
      };

    case Types.EVENT_CATEGORY_EVENT_LABEL:
      return {
        ...state,
        customLinkNps: {
          eventCategory: action.payload.eventCategory,
          eventLabel: action.payload.eventLabel,
        }
      };

    case Types.PAGE_LOAD:
      return {
        ...state,
        pageLoad: action.payload.pageLoad,
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

  addPageLoad: (pageLoad) => ({
    type: Types.PAGE_LOAD,
    payload: { pageLoad },
  }),
};
