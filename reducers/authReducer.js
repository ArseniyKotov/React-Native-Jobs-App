import { FACEBOOK_SUCESS, LOGIN_FAIL, LOGOUT } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
  case (FACEBOOK_SUCESS):
    return { token: action.payload };
  case (LOGIN_FAIL):
    return { token: null };
  default:
    return state;
  }
}
