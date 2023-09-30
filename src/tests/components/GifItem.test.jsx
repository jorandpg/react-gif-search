import { render, screen } from "@testing-library/react"
import { GifItem } from "../../components/GifItem"

describe('Pruebas en <GifItem />', () => {

    const title = "Camaleon";
    const url = "https://test.com/";

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={ title } url={ url } />);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
    });

    test('debe mostrar el titulo en el componente', () => {
        render(<GifItem title={ title } url={ url } />);
        
        // Verificamos que el titulo exista
        expect( screen.getByText(title) ).toBeTruthy();
    });
})