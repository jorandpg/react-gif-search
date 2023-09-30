import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

// Se procede a hacer un mock de useFetchGifs
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    test('debe de mostrar el loading inicialmente', () => {
        const category = 'Power';
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category } />);

        // Se espera que aparezca el texto de category
        expect( screen.getByText(category) );

        // Se espera que aparezca el texto Cargando ...
        expect( screen.getByText('Cargando ...') );
    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        const category = 'Power';
        const gifs = [
            {
                id: '123',
                title: 'Power',
                url: 'https://search.com/power'
            },
            {
                id: '456',
                title: 'happy',
                url: 'https://search.com/happy'
            }
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={ category } />);

        // Se espera que se carguen dos img
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});