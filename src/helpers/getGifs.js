/**
 * Función que retorna los gifs, dado una categorua
 * @param {*} category query
 * @returns listado de gifs
 */

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=6lLI6F2arWaDV7oHt3AqOQNi5MInI6kF&limit=20&q=${ category }`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}