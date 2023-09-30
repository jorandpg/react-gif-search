import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en getGifs()', () => {
    test('debe de retornar un arreglo de gifs', async () => {
        const gifs = await getGifs('power');

        // Esperamos un arreglo mayor a 0
        expect(gifs.length).toBeGreaterThan(0);

        // Esperamos que el contenido de un registro tenga la estructura dada con sus tipos de datos
        expect(gifs[0]).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        });
    });
});