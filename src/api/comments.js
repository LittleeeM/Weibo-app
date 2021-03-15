import ajax from '../utils/ajax.js';

export function createComment(params) {
  return ajax.post('https://demo.don.red/weibo/api/2/comments/create.json', {
    data: params,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  });
}

export function getComments(params) {
  return ajax.get('https://demo.don.red/weibo/api/2/comments/show.json', {
    params,
  });
}

export function deleteComment(params) {
  return ajax.post('https://demo.don.red/weibo/api/2/comments/destroy.json', {
    data: params,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  });
}
