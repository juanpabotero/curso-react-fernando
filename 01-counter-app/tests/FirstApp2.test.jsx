import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {
  const name = "Juan Pablo";
  const age = 29;
  const title = "Este es el FirstAppComponent";

  test("Debe hacer match con el snapshot", () => {
    /* renderiza el componente */
    const { container } = render(<FirstApp name={name} age={age} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el párrafo con el nombre", () => {
    /* primero renderizo el componente y con el screen hago referencia a 
    la pantalla y lo que he renderizado ahí */
    render(<FirstApp name={name} age={age} />);
    expect(screen.findByText(name)).toBeTruthy();
  });

  test("Debe mostrar el titulo en h1", () => {
    render(<FirstApp name={name} age={age} />);
    expect(screen.getByRole("heading", {level: 1}).innerHTML).toContain(title);
  });

});
