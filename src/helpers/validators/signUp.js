import { isEmail, minLength6, required } from '../generic';

export default (values) => {
  const name = required(values.name);
  const email = isEmail(values.email);
  const password = required(values.password) || minLength6(values.password);

  return {
    name,
    email,
    password,
  };
};
