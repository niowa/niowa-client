import { Map } from 'immutable';
import { createSelector } from 'reselect';

export const products = state => state.get('products', new Map());

export const item = createSelector(
  products,
  products => products.get('item'),
);
