export const formatItem = ({ data }) => ({
  description: data.item.description,
  amount: data.item.amount,
});

export const formatCreateItemRequest = ({ description, amount }) => (JSON.stringify({
  item: {
    description,
    amount,
  },
}));
