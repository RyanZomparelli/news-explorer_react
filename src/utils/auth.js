// Front-end mock data for development. Replace with express API.

export const register = ({ email, password, username }) => {
  return new Promise((resolve, reject) => {
    resolve({
      _id: Math.random().toString(36).substr(2, 9),
      email: email,
      username: username,
    });
  });
};

export const login = ({ email, password }) => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

export const getCurrentUser = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        name: "Fake User",
        email: "fake@example,com",
        _id: "fake-id",
      },
    });
  });
};
