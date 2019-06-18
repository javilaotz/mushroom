import * as actionTypes from './actionTypes';

const initialState = {
  users: {
    isFetched: false,
    entries: []
  },
  places: []
};

export default (state = initialState, action) => {

  //Este es el reductor
  switch (action.type) {
    case actionTypes.ADD_USER_REQUEST:
      return state;
    case actionTypes.ADD_USER_SUCCESS:
      console.log(action.payload, "PAYLOAD FROM ADD")
      return {
        ...state, users: {...state.users, entries: [...state.users.entries, action.payload]}  };
    case actionTypes.ADD_USER_FAILURE:
      return state;

    case actionTypes.GET_USERS_REQUEST:
      return state;
    case actionTypes.GET_USERS_SUCCESS:
      console.log(state, "ESTADO")
      console.log(action.payload, "Payload")
      return {
        ...state, users: {...state.users, entries:action.payload}};
    case actionTypes.GET_USERS_FAILURE:
      return {
        ...state, users: {...state.users, error: action.payload}
      }; 

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
