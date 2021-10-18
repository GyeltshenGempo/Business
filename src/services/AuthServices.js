import {baseApi} from '../utils/ApiUtils';


export const login = (payload, dispatch) => {
  return baseApi(`/users/sign_in`, 'post', null, payload).then(response => {
    if (response.data) {
      const token = response.headers['authorization'];
      const storage = localStorage;
      storage.setItem('user', JSON.stringify(response.data));
      storage.setItem('token', JSON.stringify(token));
      dispatch({type: 'LOGIN', payload: response.data});
    }
    return response.data;
  });
};

export const acceptConfirmation = (payload, dispatch) => {
  return baseApi(`/users/confirmation`, 'get', payload).then((response) => {
    if (response.data) {
      const token = response.headers['authorization'];
      const storage = localStorage;
      storage.setItem("user", JSON.stringify(response.data));
      storage.setItem("token", JSON.stringify(token));
      dispatch({type: 'LOGIN', payload: response.data})
    }
    return response.data;
  });
};

export const invitationConfirmation = (payload, dispatch) => {
  return baseApi(`/users/invitation`, 'put', null, payload).then((response) => {
    const token = response.headers['authorization'];
    const storage = localStorage;
    storage.setItem('user', JSON.stringify(response.data));
    storage.setItem('token', JSON.stringify(token));
    dispatch({type: 'LOGIN', payload: response.data});
    return response.data;
  });
};

export const userInvitations = (payload) => {
  return baseApi(`/users/invitation`, 'post', null, payload).then(response => {
    return response.data;
  })
};

export const resendOtp = (payload) => {
  return baseApi(`/resend_otp`, 'put', null, payload).then(response => {
    return response.data;
  })
};


export const logout = (dispatch) => {
  return baseApi(`/users/sign_out`, 'delete').then(response => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    sessionStorage.clear();
    dispatch({type: 'LOGOUT'});
    return response;
  });
};
