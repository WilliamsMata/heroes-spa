import { getHeroById } from "../../../../src/heroes/helpers";

describe("Pruebas en getHeroById.js", () => {
  test("Debe de retornar un heroe dado un id", () => {
    const id = "dc-batman";
    const hero = getHeroById(id);

    expect(hero).toStrictEqual({
      id: id,
      superhero: expect.any(String),
      publisher: expect.any(String),
      alter_ego: expect.any(String),
      first_appearance: expect.any(String),
      characters: expect.any(String),
    });
  });
});
