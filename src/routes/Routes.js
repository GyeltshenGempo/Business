import {LandingComponents} from '../container/View/Home/LandingComponents';
import About from '../container/View/About/About';
import SignIn from '../container/Auth/SignIn/SignIn';

export const Routes = [
  {
    primaryText: 'Landing',
    path: '/',
    component: LandingComponents
  },
  {
    primaryText: 'Landing',
    path: '/about',
    component: About
  },
  {
    primaryText: 'Landing',
    path: '/sign-in',
    component: SignIn
  },
];
