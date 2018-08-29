export const formatCreateProfileRequest = ({ name, email, password }) => (JSON.stringify({
  user: {
    name,
    email,
    password,
  },
}));

export const formatCreateSessionRequest = ({ email, password }) => (JSON.stringify({
  user: {
    email,
    password,
  },
}));

export const formatProfile = ({ data }) => ({
  id: data.user.id,
  email: data.user.email,
  name: data.user.name,
  role: data.user.role,
});
