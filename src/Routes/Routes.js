import {LandingComponents} from '../Container/view/Home/LandingComponents';
import About from '../Container/view/About/About';
import SignIn from '../Container/Auth/SignIn/SignIn';

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
