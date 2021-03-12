import { GET_COMMENTS, RESET_COMMENTS } from '../constants/actions.js';

const initState = {
  comments: [],
};

export default function reducer(state = initState, action) {
  const { comments, params: { page } = {}, total} = action.payload || {};
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: [...new Set([...state.comments, ...comments])],
        page,
        total,
      }
    case RESET_COMMENTS:
      return initState;
    default:
      return state; 
  }
}
 