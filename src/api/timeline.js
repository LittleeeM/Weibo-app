import ajax from '../utils/ajax.js';

export function getHomeTimeline(params) {
  return ajax.get('https://demo.don.red/weibo/api/2/statuses/public_timeline.json', { params });
}

export function getPost(params) {
  return ajax.get('https://demo.don.red/weibo/api/2/statuses/show.json', { params });
}
