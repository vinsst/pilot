// like-counter.js
const counterReducer = (state = {}, action) => {
  switch (action.type) {
    case "LIKE-INCREMENT":
      return {
        ...state,
        [action.x]: (state[action.x] || 0) + 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
