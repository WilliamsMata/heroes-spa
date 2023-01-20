import { types } from "../../../src/auth";

describe("Pruebas en types", () => {
  test("Debe de regresar estos types", () => {
    expect(types).toStrictEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
