import { combineReducers } from 'redux';
import settingReducer from './components/setting/reducer';

export default combineReducers({
  settings: settingReducer
});
