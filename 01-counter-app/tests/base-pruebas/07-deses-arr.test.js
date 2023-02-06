import { describe, expect, it } from "vitest";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr.js";

describe("Pruebas en 07-deses-arr", () => {
  it("Debe retornar un string y un numero", () => {
    const [letters, numbers] = retornaArreglo();
    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');
  });
});

