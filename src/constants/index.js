export  const ACCESS_TOKEN_KEY = 'access_token';  
export  const UID_KEY = 'https://demo.don.red/weibo/api/2/account/get_uid.json';  
export  const getUid = () => localStorage.getItem(UID_KEY);

export const APP_KEY = '3696852244';
export const APP_SECRET = '53eaa55c068e880f58b81cab494f819e';
export const REDIRECT_URI = encodeURIComponent('http://localhost:3000/login');

export const LOGIN_URL = `https://demo.don.red/weibo/api/oauth2/authorize?client_id=${APP_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email`;

export const getAccessCode = (code) => 
  `https://demo.don.red/weibo/api/oauth2/access_token?client_id=${APP_KEY}&client_secret=${APP_SECRET}
  &grant_type=authorization_code&redirect_uri=${REDIRECT_URI}&code=${code}`;

export const COMMENT_PAGESIZE = 5;