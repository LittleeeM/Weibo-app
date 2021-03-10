import { GET_HOME_TIMELINE } from '../constants/actions.js';

const initState = {
  home: { posts: [], page: 0 }
};

export default function reducer(state = initState, action) {
  const { statuses } = action.payload || {};
  debugger
  const { page } = action.params || {};
  switch (action.type) {
    case GET_HOME_TIMELINE:
      return {
        ...state,
        home: {
          posts: [...state.home.posts, ...statuses],
          page,
        },
      }
    default:
      return state; 
  }
}
 