import * as actionTypes from './actionTypes';

const initialState = {
  users: {
    isFetched: false,
    entries: []
  },
  filter: 'all'
};

export default (state = initialState, action) => {

  //Este es el reductor
  switch (action.type) {
    case actionTypes.ADD_USER_REQUEST:
      return state;
    case actionTypes.ADD_USER_SUCCESS:
      return {
        ...state, users: [...state.users.entries, action.payload]  };
    case actionTypes.ADD_USER_FAILURE:
      return state;

    case actionTypes.GET_USERS_REQUEST:
      return state;
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state, users: [...state.users, action.payload]  };
    case actionTypes.GET_USERS_FAILURE:
      return state; 

    case actionTypes.ADD_PLACE_REQUEST:
      return state;
    case actionTypes.ADD_PLACE_SUCCESS:
      return {
        ...state, places: [...state.places, action.payload] };
    case actionTypes.ADD_PLACE_FAILURE:
      return state;

    default:
      return state;
  }
};
