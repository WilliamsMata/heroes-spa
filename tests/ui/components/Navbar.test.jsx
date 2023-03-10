import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui/components/Navbar";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en <Navbar />", () => {
  const contextValue = {
    logged: true,
    user: {
      id: "ABC",
      name: "Williams Mata",
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test("Debe de mostrar el nombre del usuario", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Williams Mata")).toBeTruthy();
  });

  test("Debe de llamar el logout y navigate cuando se hace click en el botón", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const logoutBtn = screen.getByRole("button");

    fireEvent.click(logoutBtn);

    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {
      replace: true,
    });
  });
});
