import {CustomLink} from './model/CustomLink';
import {CustomLinkNps} from './model/CustomLinkNps';

export const Types = {
  PAGE_NAME_ITEM_CLICKED: 'analytics/PAGE_NAME_ITEM_CLICKED',
  EVENT_CATEGORY_EVENT_LABEL: 'analytics/EVENT_CATEGORY_EVENT_LABEL',
  PAGE_NAME: 'analytics/PAGE_NAME',
  TRACK_PAGE_LOAD_ERROR: 'analytics/TRACK_PAGE_LOAD_ERROR',
  SET_TRIGGER_PAGE_LOAD_GA: 'analytics/SET_TRIGGER_PAGE_LOAD_GA',
};

const INITIAL_STATE = {
  pageLoad: {
    pageName: '',
  },
  shouldTriggerPageLoadGA: true,
};

export default function analyticsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PAGE_NAME_ITEM_CLICKED:
      return {
        ...state,
        [action.payload.componentId]: action.payload.customLink,
      };

    case Types.EVENT_CATEGORY_EVENT_LABEL:
      return {
        ...state,
        [action.payload.componentId]: action.payload.customLinkNps,
      };

    case Types.PAGE_NAME:
      return {
        ...state,
        shouldTriggerPageLoadGA: action.payload.shouldTriggerPageLoadGA,
      };

    case Types.SET_TRIGGER_PAGE_LOAD_GA:
      return {
        ...state,
        pageLoad: {
          pageName: action.payload.pageName,
        },
      };

    default:
      return state;
  }
}

export const Creators = {
  addCustomLink: (analyticsParameter, componentId) => ({
    type: Types.PAGE_NAME_ITEM_CLICKED,
    payload: {
      componentId,
      customLink: new CustomLink(analyticsParameter.pageName, analyticsParameter.itemClicked),
    },
  }),

  addCustomLinkNps: (analyticsParameter, componentId) => ({
    type: Types.PAGE_NAME_ITEM_CLICKED,
    payload: {
      componentId,
      customLinkNps: new CustomLinkNps(analyticsParameter.eventCategory, analyticsParameter.eventLabel),
    },
  }),

  addPageLoad: (page) => ({
    type: Types.PAGE_NAME,
    payload: { page },
  }),

  trackPageLoadError: () => ({
    type: Types.TRACK_PAGE_LOAD_ERROR,
    payload: {},
  }),

  setTriggerPageLoadGA: (shouldTriggerPageLoadGA) => ({
    type: Types.SET_TRIGGER_PAGE_LOAD_GA,
    payload: {shouldTriggerPageLoadGA},
  })
};
