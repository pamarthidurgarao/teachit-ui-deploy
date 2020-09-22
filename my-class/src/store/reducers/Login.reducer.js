import { constants } from "../Constants";

const initialState = { user: {} };

export function logIn(state = initialState, action) {
  switch (action.type) {
    case constants.ADD_PLAYER_REQUEST:
      return { user: {} };
    case constants.ADD_PLAYER_SUCCESS:
      return { user: action.user };
    case constants.ADD_PLAYER_FAILURE:
      return { user: {} };
    default:
      return state;
  }
}
