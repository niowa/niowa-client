import { createStructuredSelector } from 'reselect';
import { Selectors as UserSelectors } from 'domains/user';
import * as NotificationsSelector from 'selectors/notifications';

export default createStructuredSelector({
  role: UserSelectors.currentUserRole,
  notifications: NotificationsSelector.notifications,
});

