import { CHANGE_THEME_COLOR, RESET_THEME_COLOR } from '../types';

const initialState = {
  themeColor: '#2196F3'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME_COLOR:
      return {
        ...state,
        themeColor: action.themeColor
      };

    case RESET_THEME_COLOR:
      return initialState;

    default:
      return state;
  }
}
