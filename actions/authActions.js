import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import { FACEBOOK_SUCESS, LOGIN_FAIL, LOGOUT } from './types';
import { APP_ID, APP_SECRET } from './facebookConfig';

const doFacebookLogin = async (dispatch) => {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync(APP_ID, {
    permissions: ['public_profile'],
  });
  if (type === 'cancel') {
    return dispatch({ type: LOGIN_FAIL });
  }
  await AsyncStorage.setItem('fb_token', token);
  dispatch({ type: FACEBOOK_SUCESS, payload: token });
};

export const facebookLogin = () => async (dispatch) => {
  const token = await AsyncStorage.getItem('fb_token');
  if (token) {
    dispatch({ type: FACEBOOK_SUCESS, payload: token });
  } else {
    doFacebookLogin(dispatch);
  }
};

