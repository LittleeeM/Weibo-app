import ajax from '../utils/ajax.js';

export function getHomeTimeline(params) {
  return ajax.get('https://demo.don.red/weibo/api/2/statuses/home_timeline.json', { params });
}
