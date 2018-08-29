import { isEmail } from '../generic';

export default (values) => {
  const email = isEmail(values.email);

  return {
    email,
  };
};
