import { message } from 'antd';
import * as api from '../api/comments';
import { GET_COMMENTS, RESET_COMMENTS, ADD_COMMENT, REMOVE_COMMENT } from '../constants/actions';

export function createComment(params = {}, isFirst) {
  return async (dispatch) => {
    try {
      const result = await api.createComment(params);
      if (result) {
        message.success('success!');
        if (!isFirst) {
          dispatch({
            type: ADD_COMMENT,
            payload: result,
          })
        }
      }
    } catch (e) {
      message.error(e.message || 'fail!');
    }
  }
}

export function getComments(params = {}) {
  return async (dispatch) => {
    const { comments = [], status: { comments_count: total } } = await api.getComments(params);
    console.log(total)
    dispatch({
      type: GET_COMMENTS,
      payload: {
        comments,
        params,
        total,
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

export function deleteComment(payload = {}) {
  return async (dispatch) => {
    const { id } = await api.deleteComment(payload);
    if (id) {
      message.success('删除评论成功！');
      dispatch({
        type: REMOVE_COMMENT,
        payload: id,
      })
    }
  }
}