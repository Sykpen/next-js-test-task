import { GET_CLIENT_DATA, CHANGE_LOGIN_STATUS } from "../constants";

export const getClientData = (clientData: Object) => {
  return async (dispatch) => {
    const responce = await fetch("http://localhost:4200/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify(clientData),
    });
    dispatch(setClientDataToStore(clientData));
  };
};

function setClientDataToStore(data: Object) {
  return {
    type: GET_CLIENT_DATA,
    clientData: data,
  };
}

export const changeLoginStatus = () => {
  return { type: CHANGE_LOGIN_STATUS };
};
