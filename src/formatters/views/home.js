export const formatProfile = ({ data }) => ({
  id: data.user.id,
  email: data.user.email,
  name: data.user.name,
});
