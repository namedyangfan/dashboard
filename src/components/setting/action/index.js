import { CHANGE_THEME_COLOR, RESET_THEME_COLOR } from '../types';

export const changeThemeColor = themeColor => ({
  type: CHANGE_THEME_COLOR,
  themeColor
})

export const resetThemeColor = () => ({
  type: RESET_THEME_COLOR
})