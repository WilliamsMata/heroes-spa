import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en <SearchPage />", () => {
  beforeEach(() => jest.clearAllMocks());

  test("Debe de mostrarse correctamente con valores por defecto", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar a Batman", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const img = screen.getByRole("img");
    const searchHeroText = screen.getByLabelText("search-hero-text");
    const noHeroWithText = screen.getByLabelText("no-hero-text");

    expect(img.src).toContain("images/heroes/dc-batman.jpg");
    expect(searchHeroText.style.display).toBe("none");
    expect(noHeroWithText.style.display).toBe("none");
  });

  test("Debe de mostrar un error si no se encuentra el hero (batman123)", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const searchHeroText = screen.getByLabelText("search-hero-text");
    const noHeroWithText = screen.getByLabelText("no-hero-text");

    expect(searchHeroText.style.display).toBe("none");
    expect(noHeroWithText.style.display).not.toBe("none");
  });

  test("Debe de llamar el navigate a la pantalla nueva", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    const form = screen.getByLabelText("form");

    fireEvent.input(input, { target: { value: "batman" } });
    fireEvent.submit(form);

    expect(mockedUseNavigate).toHaveBeenCalledWith("?q=batman");
  });
});
