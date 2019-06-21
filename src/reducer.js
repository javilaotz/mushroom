import * as actionTypes from './actionTypes';

const initialState = {
  users: {
    entries: [],
    error: ""
  },
  places: {
    entries: [],
    error: ""
  },
  careerList: {
    entries: [],
    error: ""
  },
  buildings: {
    entries: [],
    error: ""
  }
};

export default (state = initialState, action) => {

  //Este es el reductor
  switch (action.type) {
    case actionTypes.ADD_USER_REQUEST:
      return state;
    case actionTypes.ADD_USER_SUCCESS:
      return {
        ...state, users: {...state.users, entries: [...state.users.entries, action.payload]}  };
    case actionTypes.ADD_USER_FAILURE:
      return state;

    case actionTypes.GET_USERS_REQUEST:
      return state;
    case actionTypes.GET_USERS_SUCCESS:
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
        ...state, places: {...state.places, entries: action.payload} };
    case actionTypes.ADD_PLACE_FAILURE:
      return state;

    case actionTypes.GET_CAREERS_REQUEST:
      return state;
    case actionTypes.GET_CAREERS_SUCCESS:
      return {
        ...state, careerList: {...state.careerList, entries: action.payload} };
    case actionTypes.GET_CAREERS_FAILURE:
      return state;

    case actionTypes.GET_BUILDINGS_REQUEST:
      return state;
    case actionTypes.GET_BUILDINGS_SUCCESS:
      return {
        ...state, buildings: {...state.buildings, entries: action.payload} };
    case actionTypes.GET_BUILDINGS_FAILURE:
      return state;

    default:
      return state;
  }
};
