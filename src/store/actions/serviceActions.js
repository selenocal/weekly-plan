import * as actionTypes from "./actionTypes";

export const save = data => dispatch => {
  dispatch({
    type: actionTypes.SAVE_SERVICE_DATA,
    data
  });
};
