import {Route} from 'react-router-dom';
import React from 'react';
import {Home} from '../container/View/Home/Home';

export const LandingNavigator = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Home><Component {...props} /></Home>
      )
      }
    />
  );
};
