import { getHeroesByName } from "../../../../src/heroes/helpers";

describe("Pruebas en getHeroesByName.js", () => {
  test("Debe de retornar un arreglo de heroes que incluyan el heroe dado", () => {
    const heroes = getHeroesByName("batman");

    expect(heroes).toStrictEqual([
      {
        id: "dc-batman",
        superhero: "Batman",
        publisher: "DC Comics",
        alter_ego: "Bruce Wayne",
        first_appearance: "Detective Comics #27",
        characters: "Bruce Wayne",
      },
    ]);
    expect(heroes.length).toBeGreaterThanOrEqual(1);
  });

  test("Debe de retornar un arreglo vacio si el heroe no existe", () => {
    const heroes = getHeroesByName("batman123");

    expect(heroes).toStrictEqual([]);
  });
});
