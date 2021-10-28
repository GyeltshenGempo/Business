import React, {useContext} from 'react';
import {isAuthorized} from './Authorize';
import {StateContext} from '../store';

const Authorized = ({Component, authorized = [], ...props}) => {
  const {user: {data: {attributes: {role}}}} = useContext(StateContext);
  return (isAuthorized(role, authorized) || props.skip ? <Component {...props}/> : window.location.href = '/forbidden');
};
export default Authorized;
