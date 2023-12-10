const axios = require('axios');
const cheerio = require('cheerio');

async function obtenerUrlImagen(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const imageUrl = $('img').attr('src');
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen (${url}): ${error.message}`);
  }
}

module.exports = async function obtenerImagenes() {
  const urls = [
    'https://wantbot.xyz/wantapiwaifu/',
    'https://wantbot.xyz/wantapiass/',
    'https://wantbot.xyz/wantapibikinis/',
    'https://wantbot.xyz/wantapidog/',
    'https://wantbot.xyz/wantapiwaifuexotica/'
  ];

  const resultados = [];

  for (const url of urls) {
    try {
      const imageUrl = await obtenerUrlImagen(url);
      resultados.push({ url, imageUrl });
    } catch (error) {
      resultados.push({ url, error: error.message });
    }
  }

  return resultados;
};