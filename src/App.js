import React, {useReducer} from 'react';
import useCombinedReducers from 'use-combined-reducers';
import {ProtectedNavigator} from './routes/ProtectedNavigator';
import {LandingNavigator} from './routes/LandingNavigator';
import {ApiUtils} from './utils/ApiUtils';
import {createBrowserHistory} from 'history';
import {DispatchContext, StateContext} from './store';
import {statisticsReducer, userReducer} from './reducers';
import {SnackbarProvider} from 'notistack';
import {Routes} from './routes/Routes';
import {ProtectedRoutes} from './routes/ProtectedRoutes';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ForgotPassword from './container/Auth/ForgotPassword/ForgotPassword';
import SignUp from './container/Auth/SignUp/SignUp';
import SignIn from './container/Auth/SignIn/SignIn';
import './assets/StyleSheets/_utility.scss';

function App() {
  const [state, dispatch] = useCombinedReducers({
    user: useReducer(userReducer),
    statistics: useReducer(statisticsReducer, {}),
  });

  ApiUtils.dispatch = dispatch;
  const history = createBrowserHistory();

  return (
    <React.Fragment>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <SnackbarProvider maxSnack={2}>
            <Router history={history}>
              <Switch>
                {
                  Routes.map((nav, index) => (
                    <LandingNavigator {...nav} key={index} path={nav.path}
                                      component={nav.component} exact/>))
                }
                {
                  ProtectedRoutes.map((nav, index) => (
                    <ProtectedNavigator {...nav} key={index} path={nav.path}
                                        component={nav.component} exact/>))
                }
                <Route path="/login" component={SignIn} exact/>
                <Route path="/sign-up" component={SignUp} exact/>
                <Route path="/password/reset" component={ForgotPassword} exact/>
              </Switch>
            </Router>
          </SnackbarProvider>
        </StateContext.Provider>
      </DispatchContext.Provider>
    </React.Fragment>
  );
}

export default App;
