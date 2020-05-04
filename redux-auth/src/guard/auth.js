export const addToken = (response) => {
  localStorage.setItem('currentUser', JSON.stringify(response));
  localStorage.setItem('token', JSON.stringify(response.token));
  return true
}

export const removeTokenAndUser = () => {
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
  return true
}

export const isAuth = () => {
  return getToken() ? true : false;
}

export const getToken = () => {
  return localStorage.getItem('token');
}

export const getUser = () => {
  return localStorage.getItem('currentUser');
}

export const getAuthorizationHeader = () => {
  return {'Authorization ': `${getToken()}`}
}

export default { 
  getAuthorizationHeader,
  addToken, 
  removeTokenAndUser,
  isAuth, 
  getToken, 
}
