const TOKEN_KEY = "jwt";

export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: TOKEN_KEY });
  });
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    resolve({ name: "fake user", email: "fake@email.com", _id: "fake-id" });
  });
};

export const signUp = (user) => {
  return new Promise((resolve, reject) => {
    resolve({ name: user.name, email: user.email, token: TOKEN_KEY });
  });
};
