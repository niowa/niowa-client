export const HOME = '/home';
export const AUTHENTICATE = '/auth';
export const ADMIN = '/admin';

export const ALLOWED_ROUTES = [
  AUTHENTICATE,
  `${ADMIN}${AUTHENTICATE}`,
];

export const ADMIN_ROUTES = [
  `${ADMIN}${HOME}`,
];
