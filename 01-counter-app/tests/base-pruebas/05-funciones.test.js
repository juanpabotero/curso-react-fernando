import { describe, it, expect } from "vitest";
import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

/* toEqual es una comparación más estricta que el toBe, este es
el que se debe usar para comparar objetos */
describe("Pruebas 05-funciones.js", () => {
  it("getUser debe retornar un objeto", () => {
    const user = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    expect(getUser()).toEqual(user);
  });

  it("getUser debe retornar un usuario", () => {
    const userName = 'pablo'
    const user = {
      uid: "ABC567",
      username: 'pablo',
    }
    expect(getUsuarioActivo(userName)).toEqual(user);
  });
});
