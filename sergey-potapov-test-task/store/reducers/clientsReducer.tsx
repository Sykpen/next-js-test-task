import { GET_CLIENT_DATA, CHANGE_LOGIN_STATUS } from "../constants";

interface ClientState {
  clientData: Array<Object>;
  isLoggedIn: boolean;
}

const initialState = {
  clientData: [],
  isLoggedIn: false,
};

export const clientsReducer = (state: ClientState = initialState, action) => {
  switch (action.type) {
    case GET_CLIENT_DATA:
      return {
        ...state,
        clientData: action.clientData,
      };
    case CHANGE_LOGIN_STATUS:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    default:
      return state;
  }
};
