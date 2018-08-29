import { required, isNaturalNumber } from '../generic';

export default (values) => {
  const description = required(values.description);
  const amount = required(+values.amount) || isNaturalNumber(+values.amount);

  return {
    description,
    amount,
  };
};
