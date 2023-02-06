import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en <FirstApp />", () => {
  const initialValue = 100;

  test("Debe hacer match con el snapshot", () => {
    /* renderiza el componente */
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el valor por defecto de 100", () => {
    /* renderiza el componente */
    render(<CounterApp value={initialValue} />);
    expect(screen.getByText(initialValue)).toBeInTheDocument();
  });

  test("Debe incrementar con el botón +1", () => {
    render(<CounterApp value={initialValue} />);
    /* simular el evento click */
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText(initialValue + 1)).toBeTruthy();
  });

  test("Debe incrementar con el botón -1", () => {
    render(<CounterApp value={initialValue} />);
    /* simular el evento click */
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText(initialValue - 1)).toBeTruthy();
  });

  test("Debe reiniciar el contador al valor inicial", () => {
    render(<CounterApp value={initialValue} />);
    /* simular el evento click */
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
