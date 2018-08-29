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
