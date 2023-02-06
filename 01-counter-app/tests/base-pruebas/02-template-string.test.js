import { describe, expect, it } from "vitest";
import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en 02-template-string", () => {
  it("Debe retornar Hola + nombre", () => {
    const nombre = "Fernando";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola " + nombre);
  });

  it("Debe retornar Hola Carlos si no hay argumento nombre", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Carlos");
  });
});
