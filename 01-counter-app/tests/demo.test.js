import { describe, expect, test } from 'vitest'

describe("Pruebas en <DemoComponent />", () => {
  test("Esto es una demo", () => {
    // 1. Inicialización
    const mensaje = "Hola Mundo";
    // 2. Estímulo
    const mensaje2 = mensaje.trim();
    // 3. Observar el comportamiento
    expect(mensaje).toBe(mensaje2);
  });
});
