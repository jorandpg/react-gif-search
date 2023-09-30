import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        const inputValue = 'Power';
        render(<AddCategory onNewValue={ () => {} } />);
        const input = screen.getByRole('textbox');

        // Disparamos en evento (como si el usuario ingresara valor al input)
        // El segundo parametro es para asignarle el valor al input
        fireEvent.input(input, { target: { value: inputValue } });

        expect(input.value).toBe(inputValue)
    });

    test('debe de llamar onNewValue si el input tiene un valor', () => {
        const inputValue = 'Power';
        const onNewValue = jest.fn();

        render(<AddCategory onNewValue={ onNewValue } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Disparamos en evento (como si el usuario ingresara valor al input)
        // El segundo parametro es para asignarle el valor al input
        fireEvent.input(input, { target: { value: inputValue } });

        // Se dispara el evento submit al form
        fireEvent.submit(form);
        
        // Se evalua que la función onNewValue haya sido llamada
        expect( onNewValue ).toHaveBeenCalled();
        expect( onNewValue ).toHaveBeenCalledTimes(1);
        
        // Se evalua que la función onNewValue haya sido llamada con el inputValue
        expect( onNewValue ).toHaveBeenCalledWith(inputValue);
        
        // Evaluamos que el inputValue no tenga valores (limpieza)
        expect(input.value).toBe('');
    });

    test('no debe de llamar onNewValue si el input está vacío', () => {
        const onNewValue = jest.fn();

        render(<AddCategory onNewValue={ onNewValue } />);        
        const form = screen.getByRole('form');

        // Se dispara el evento submit al form
        fireEvent.submit(form);

        expect( onNewValue ).toHaveBeenCalledTimes(0);
    });
});