import * as actionTypes from './actionTypes';
import * as api from './components/Api';

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
    const user = await api.addUser(user_data);
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

export const addPlace = space_data => async dispatch => {
    dispatch({
      type: actionTypes.ADD_SPACE_REQUEST
    });
    try {
      const space = await api.addSpace(space_data);
      dispatch({
        type: actionTypes.ADD_SPACE_SUCCESS,
        payload: space
      });
    } catch (e) {
      dispatch({
        type: actionTypes.ADD_SPACE_FAILURE,
        payload: e
      });
    }
  };
