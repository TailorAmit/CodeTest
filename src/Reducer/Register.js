import { RegisterTypes, LoginTypes } from "../types";

const initialState = {
  loading: false,
  registerData: {},
  error: "",
  TOKEN: "",
};

function reducer(state, action) {
  switch (action.type) {
    case LoginTypes.lOADING:
      return {
        ...state,
        ...{ loading: true },
      };

    case LoginTypes.SUCCESS:
      return {
        ...state,
        ...{ loading: false },
        ...{ TOKEN: action.data.token },
      };

    case LoginTypes.FAILED:
      return {
        ...state,
        ...{ loading: false },
        ...{ error: action.error },
      };

    case RegisterTypes.lOADING:
      return {
        ...state,
        ...{ loading: true },
      };

    case RegisterTypes.SUCCESS:
      return {
        ...state,
        ...{ registerData: action.data },
      };

    case RegisterTypes.FAILED:
      return {
        ...state,
        ...{ error: action.error },
      };

    default:
      return state;
  }
}

export default reducer;
