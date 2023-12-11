const axios = require('axios');
const cheerio = require('cheerio');

async function obtenerUrlsCategoria(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const imageUrls = [];

    // Buscar en las etiquetas img dentro de figure
    $('figure.wp-block-image img[src]').each((_, element) => {
      imageUrls.push($(element).attr('src'));
    });

    return imageUrls;
  } catch (error) {
    throw new Error(`Error al obtener las imágenes (${url}): ${error.message}`);
  }
}

async function obtenerUrlAleatoria(url) {
  try {
    const imageUrls = await obtenerUrlsCategoria(url);

    if (imageUrls.length === 0) {
      throw new Error('No se encontraron imágenes en la categoría.');
    }

    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];

    return randomImageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen aleatoria de la categoría (${url}): ${error.message}`);
  }
}

async function wantapiwaifu() {
  const url = 'https://wantbot.xyz/wantapiwaifu/';
  try {
    const imageUrl = await obtenerUrlAleatoria(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de waifu: ${error.message}`);
  }
}

async function wantapiass() {
  const url = 'https://wantbot.xyz/wantapiass/';
  try {
    const imageUrl = await obtenerUrlAleatoria(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de waifu: ${error.message}`);
  }
}

async function wantapibikinis() {
  const url = 'https://wantbot.xyz/wantapibikinis/';
  try {
    const imageUrl = await obtenerUrlAleatoria(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de waifu: ${error.message}`);
  }
}

async function wantapidog() {
  const url = 'https://wantbot.xyz/wantapidog/';
  try {
    const imageUrl = await obtenerUrlAleatoria(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de waifu: ${error.message}`);
  }
}

async function wantapiwaifuexotica() {
  const url = 'https://wantbot.xyz/wantapiwaifuexotica/';
  try {
    const imageUrl = await obtenerUrlAleatoria(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de waifu: ${error.message}`);
  }
}

// Otras funciones de categoría...

module.exports = {
  wantapiwaifu,
  wantapiass,
  wantapibikinis,
  wantapidog,
  wantapiwaifuexotica
};