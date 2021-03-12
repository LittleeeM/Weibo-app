import { message } from 'antd';
import * as api from '../api/comments';
import { GET_COMMENTS, RESET_COMMENTS } from '../constants/actions';

export function createComment(params = {}, isFirst) {
  return async () => {
    try {
      const { id } = await api.createComment(params);
      if (id) {
        message.success('success!');
        if (isFirst) {
          window.location.href = '/';
        }
      }
    } catch(e) {
      message.error(e.message || 'fail!');
    }
  }
}  

export function getComments(params = {}) {
  return async (dispatch) => {
    const { comments = [], total_number = 0 } = await api.getComments(params);
    dispatch({
      type: GET_COMMENTS,
      payload: {
        comments,
        params,
        total: total_number,
      },
    })
  }
}

export function resetComments() {
  return async (dispatch) => {
    dispatch({
      type: RESET_COMMENTS,
    })
  }
}