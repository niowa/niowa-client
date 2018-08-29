import { isValidItemId } from '../generic';

export default (values) => {
  const itemId = isValidItemId(+values.itemId);

  return {
    itemId,
  };
};
