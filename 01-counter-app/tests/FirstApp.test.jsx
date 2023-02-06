import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {
  /* este test le toma una foto al componente y lo compara con lo que 
  se renderice en este test */
  test("Debe hacer match con el snapshot", () => {
    /* renderiza el componente */
    const { container } = render(<FirstApp name="Juan Pablo" age={29} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el titulo en h1", () => {
    const title = "Este es el FirstAppComponent";
    /* renderiza el componente */
    const { container, getByText, getByTestId } = render(
      <FirstApp name="Juan Pablo" age={29} />
    );
    expect(getByText(title)).toBeTruthy();
    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toContain("Este es el FirstAppComponent");
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("Debe mostrar el nombre enviado por props", () => {
    const name = "Juan Pablo";
    const age = 29;
    const { findByText } = render(
      <FirstApp name={name} age={age} />
    );
    expect(findByText(name)).toBeTruthy();
  });
});
