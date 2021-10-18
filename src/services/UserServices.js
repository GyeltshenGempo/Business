import {baseApi} from '../utils/ApiUtils';

export const usersApi = (method, payload = null, params = null) => {
  return baseApi(`/users`, method, params, payload).then(response => {
    return response.data;
  });
};

export const userPasswordUpdateApi = (method, payload = null, params = null) => {
  return baseApi(`/users`, method, params, payload).then(response => {
    return response.data;
  });
};

export const userForgotPassword = (method, payload = null, params = null) => {
  return baseApi(`/users/password`, method, params, payload).then(response => {
    return response.data;
  });
};

export const userContact = (method, payload = null, params = null) => {
  return baseApi(`/contacts`, method, params, payload).then(response => {
    return response.data;
  });
};

export const usersAction = (method, id, payload = null, params = null) => {
  return baseApi(`/users/${id}`, method, params, payload).then(response => {
    return response.data;
  });
};

export const profileAPi = (method, id, payload = null, params = null) => {
  return baseApi(`/users/profile`, method, params, payload).then(response => {
    return response.data;
  });
};


