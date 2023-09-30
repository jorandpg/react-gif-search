import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    test('debe de regresar el estado inicial', () => {
        const { result } = renderHook( () => useFetchGifs('Power') );
        const { images, isLoading } = result.current;

        // Se evalua que el array esté vacío
        expect(images.length).toBe(0);

        // Se evalúa que este cargando
        expect(isLoading).toBe(true);
    });

    test('debe de retornar un arreglo de imagenes y isLoading en false', async () => {
        const { result } = renderHook( () => useFetchGifs('Power') );

        // Se espera hasta que haya datos en el arrey de imagenes
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        // Se desestructura el contenido del resultado
        const { images, isLoading } = result.current;

        // Se evalua que el array tenga elementos
        expect(images.length).toBeGreaterThan(0);

        // Se evalúa que el loading esté en falso
        expect(isLoading).toBeFalsy();
    });
});