import {commonAuthorization} from './RoleAuthorization';


export const ProtectedRoutes = [
  {
    primaryText: 'Profile',
    path: '/Profile',
    authorized: commonAuthorization,
  },
];
