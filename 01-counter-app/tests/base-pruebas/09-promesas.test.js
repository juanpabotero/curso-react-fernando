import { describe, expect, it } from "vitest";
import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", () => {
  it("getHeroeByIdAsync debe retornar un héroe", async () => {
    const id = 1;
    const heroe = await getHeroeByIdAsync(id);
    const heroeExpected = {
      id: 1,
      name: "Batman",
      owner: "DC",
    };
    expect(heroe).toEqual(heroeExpected);
  });
});
