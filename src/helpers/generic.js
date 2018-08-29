import isValidEmail from 'validator/lib/isEmail';
import { isInteger } from 'lodash';

const maxElapsedYear = 22;
// const cvvLength = 4;

export const isEmail = value => (value && isValidEmail(value) ? undefined : 'validations:invalidEmail');

export const isNaturalNumber = value => (value && Number.isInteger(value) && value > 0) ? undefined : 'validations:invalidAmount';

export const isValidItemId = value => (isInteger(value) && value >= 0 ? undefined : 'validations:invalidItemId');

export const containsSymbols = value => (value && /[a-zA-Z]/.test(value) ? undefined : 'validations:shouldContainLetters');

const minLength = min => value =>
  (value && value.length < min ? 'validations:tooShort' : undefined);

export const minLength6 = minLength(6);

export const minLength3 = minLength(3);

const maxLength = max => value =>
  (value && value.length > max ? 'validations:invalidLength' : undefined);

const length = count => value =>
  (value && value.toString().length !== count ? 'validations:invalidLength' : undefined);

export const maxLength16 = maxLength(16);

export const maxLength4 = maxLength(4);

export const length6 = length(6);

export const required = value => (value ? undefined : 'validations:required');

export const matches = (value1, value2) => (value1 === value2 ? undefined : 'validations:shouldMatch');



