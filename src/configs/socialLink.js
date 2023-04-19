const base_url = import.meta.env.VITE_REACT_APP_SERVER_URL + "/auth/";
// const redirect_uri = '?redirect_uri=' + process.env.REACT_APP_REDIRECT_URI;
export const FACEBOOK_LOGIN_URL = `${base_url}facebook`;
export const GOOGLE_LOGIN_URL = `${base_url}google`;
