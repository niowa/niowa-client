import { push } from 'react-router-redux';
import * as Routes from 'constants/routing';

export const navigateToAuth= () => push(Routes.AUTHENTICATE);

export const navigateToHome = () => push(Routes.HOME);

export const navigateToAdminPanel = () => push(`${Routes.ADMIN}${Routes.HOME}`);
