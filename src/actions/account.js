import { message } from 'antd';
import * as api from '../api/account';
import { ACCESS_TOKEN_KEY } from '../constants';

export function getAccess(params = {}) {
  return async () => {
    try {
      const { access_token } = await api.getAccess(params);
      localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
    } catch (e) {
      message.error('登录失败');
    }
    window.location.href = '/';
  }
}  