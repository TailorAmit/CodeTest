import {} from "../types.js";

export function LoginSucess(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function LoginFailed(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}
