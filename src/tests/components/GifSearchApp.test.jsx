import { fireEvent, render, screen } from "@testing-library/react";
import { GifSearchApp } from "../../components";


describe('Pruebas en <GifSearchApp />', () => {
    test('debe de mostrar el componente con los valores por defecto', () => {
        render(<GifSearchApp />);

        const title = 'power';

        expect(screen.getByText('Git Search App'));

        // Verificamos que el titulo exista
        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('debe agregarse una nueva categoria', () => {
        render(<GifSearchApp />);

        const title1 = 'power';

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Simula el cambio en el valor del input
        fireEvent.change(input, { target: { value: title1 } });

        // Se dispara el evento submit al form
        fireEvent.submit(form);
        

        // Simula el cambio en el valor del input
        fireEvent.change(input, { target: { value: title1 } });

        // Se dispara el evento submit al form
        fireEvent.submit(form);

        expect(screen.getAllByText(title1).length).toBe(1);

        screen.debug();
    });

    
      
});