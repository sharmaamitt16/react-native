import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
    case 'add_error':
      return {
        ...state,
        errorMessage: action.payload
      };
    case 'signup':
      return {
        token: action.payload,
        errorMessage: ''
      };
    case 'signin':
      return state;
    case 'signout':
        return state;
  }
};

const signup = dispatch => async({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token });

    navigate('TrackList');
  } catch(err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong. Please try again.'
    });
  }
};

const signin = (dispatch) => {
  return async({email, password}) => {
    await jsonServer.put(`/signup`, {title, content});
    dispatch ({type: 'signup', payload: {email, password}});
    if (callback) {
      callback();
    }
  }
}

const signout = (dispatch) => {
  return () => {

  };
}

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: '' }
);
