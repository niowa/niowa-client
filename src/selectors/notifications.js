import { Map } from 'immutable';
import { createSelector } from 'reselect';

export const notifications = state => state.get('notifications');
