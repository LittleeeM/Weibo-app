import * as api from '../api/timeline.js';
import { GET_HOME_TIMELINE } from '../constants/actions';

export function getHomeTimeline(params = {}) {
  return async (dispatch) => {
    const result = await api.getHomeTimeline(params);
    debugger
    dispatch({
      type: GET_HOME_TIMELINE,
      payload: result,
      params,
    })
  }
}