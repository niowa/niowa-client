import { createSelector } from 'reselect';

export const route = state => {
  return state.getIn(['routing', 'location', 'pathname']);
};

export const search = state => state.getIn(['routing', 'location', 'search']);

export const routePath = createSelector(
  route,
  currentRoute => currentRoute,
);

export const path = createSelector(
  [route, search],
  (routeState, searchState) => `${routeState}${searchState}`,
);
