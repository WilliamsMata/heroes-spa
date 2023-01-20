import { authReducer, types } from "../../../src/auth";

describe("Pruebas en authReducer", () => {
  const initialState = {
    logged: false,
  };

  const loginAction = {
    type: types.login,
    payload: {
      id: "ABC",
      name: "Williams",
    },
  };

  const logoutAction = {
    type: types.logout,
  };

  test("Debe de retornar el estado por defecto", () => {
    const authState = authReducer(initialState, {});

    expect(authState).toStrictEqual(initialState);
  });

  test("Login debe de llamar el login, autenticar y establecer el user", () => {
    const state = authReducer(initialState, loginAction);

    expect(state).toStrictEqual({
      logged: true,
      user: loginAction.payload,
    });
  });

  test("Logout debe de borrar el name del usuario y establecer el logged en false", () => {
    const state = authReducer(initialState, loginAction);
    const { logged, user } = authReducer(state, logoutAction);

    expect(logged).toBeFalsy();
    expect(user).toBeFalsy();
  });
});
