import ajax from '../utils/ajax.js';

export function createComment(params) {
  return ajax.post('https://demo.don.red/weibo/api/2/comments/create.json', { params });
}

