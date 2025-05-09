export const setToken = (token) => {
  localStorage.setItem('drs_admin_token', token);
};

export const getToken = () => {
  return localStorage.getItem('drs_admin_token');
};

export const removeToken = () => {
  localStorage.removeItem('drs_admin_token');
};
