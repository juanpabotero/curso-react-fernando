import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";
import { vi } from 'vitest'

describe("Pruebas en <AddCategory />", () => {
  test("debe de cambiar el valor de la caja de texto", () => {
    /* renderizo el componente y quedaria disponible en el 
    objeto screen */
    render(<AddCategory onNewCategory={() => {}} />);
    
    /* para obtener un elemento por su rol y el selector del input 
    es "textbox" */
    const input = screen.getByRole("textbox");

    /* simular eventos y elijo el evento que quiero que pase, en este 
    caso, el primer parametro es el elemento sobre el que voy a simular 
    el evento y el segundo es el valor */
    fireEvent.input(input, { target: { value: "Saitama" } });

    expect(input.value).toBe("Saitama");
  });

  test("debe de llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Saitama";
    /* simula una función */
    const onNewCategory = vi.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    /* si no encuentra el form, debo ponerle aria-label="form" */
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("no debe de llamar el onNewCategory si el input está vació", () => {
    const onNewCategory = vi.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
