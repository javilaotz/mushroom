import * as actionTypes from './actionTypes';
import * as Api from './components/Api';

//Action creators
//export const addTodo = todo => ({ type: actionTypes.ADD_TODO, payload: todo });
/*export const applyFilter = opc => ({
  type: actionTypes.APPLY_FILTER,
  payload: opc
});*/

//Thunks
export const addUser = user_data => async dispatch => {
  dispatch({
    type: actionTypes.ADD_USER_REQUEST
  });
  try {
    const user = await Api.addUser(user_data);
    dispatch({
      type: actionTypes.ADD_USER_SUCCESS,
      payload: user
    });
  } catch (e) {
    dispatch({
      type: actionTypes.ADD_USER_FAILURE,
      payload: e
    });
  }
};

export const getUsers = () => async dispatch => {
  dispatch({
    type: actionTypes.GET_USERS_REQUEST
  });
  try {
    const users = await Api.getUsers();
    dispatch({
      type: actionTypes.GET_USERS_SUCCESS,
      payload: users
    });
  } catch (e) {
    dispatch({
      type: actionTypes.GET_USERS_FAILURE,
      payload: e
    });
  }
};

export const addPlace = space_data => async dispatch => {
    dispatch({
      type: actionTypes.ADD_PLACE_REQUEST
    });
    try {
      const space = await Api.addPlace(space_data);
      dispatch({
        type: actionTypes.ADD_PLACE_SUCCESS,
        payload: space
      });
    } catch (e) {
      dispatch({
        type: actionTypes.ADD_PLACE_FAILURE,
        payload: e
      });
    }
  };

  export const addManager = manager_data => async dispatch => {
    dispatch({
      type: actionTypes.ADD_MANAGER_REQUEST
    });
    try {
      const manager = await Api.addManager(manager_data);
      dispatch({
        type: actionTypes.ADD_MANAGER_SUCCESS,
        payload: manager
      });
    } catch (e) {
      dispatch({
        type: actionTypes.ADD_MANAGER_FAILURE,
        payload: e
      });
    }
  };
