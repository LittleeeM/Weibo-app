import { message } from 'antd';
import * as api from '../api/comments';

export function createComment(params = {}, isFirst) {
  return async () => {
    try {
      const { id } = await api.createComment(params);
      if (id) {
        message.success('success!');
        // if (isFirst) {
        //   window.location.href = '/';
        // }
      }
    } catch(e) {
      message.error(e.message || 'fail!');
    }
  }
}  