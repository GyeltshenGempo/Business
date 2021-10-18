import {Redirect, Route} from 'react-router-dom';
import React, {useContext} from 'react';
import Authorized from './Authorized';
import {ProtectedMain} from '../Container/Admin/Main/Main';
import {StateContext} from '../store';

export const ProtectedNavigator = ({component: Component, ...rest}) => {
  const {user} = useContext(StateContext);

  return (
    <Route
      {...rest}
      render={props => {
        return user?.authenticated ? (
            <ProtectedMain><Authorized Component={Component} {...rest} {...props}/></ProtectedMain>)
          : (<Redirect exact to={{pathname: '/', state: {form: props.location}}}/>);
      }

      }
    />
  );
};
