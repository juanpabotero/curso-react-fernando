import { describe, expect, it } from "vitest";
import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  it("getHeroeById debe retornar un héroe por ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    expect(heroe).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  it("getHeroeById debe retornar falsy si no existe el héroe", () => {
    const id = 100;
    const heroe = getHeroeById(id);
    expect(heroe).toBeFalsy();
  });

  it("getHeroesByOwner debe retornar los heroes que pertenecen a DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    const heoresExpected = [
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ];
    expect(heroes).toEqual(heoresExpected);
    expect(heroes.length).toEqual(3);
  });

  it("getHeroesByOwner debe retornar los heroes que pertenecen a Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    const heoresExpected = [
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ];
    expect(heroes).toEqual(heoresExpected);
    expect(heroes.length).toEqual(2);
  });
});
