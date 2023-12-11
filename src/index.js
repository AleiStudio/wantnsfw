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

async function wantapiwaifu() {
  const url = 'https://wantbot.xyz/wantapiwaifu/';
  try {
    const imageUrl = await obtenerUrlImagen(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de waifu: ${error.message}`);
  }
}

async function wantapiass() {
  const url = 'https://wantbot.xyz/wantapiass/';
  try {
    const imageUrl = await obtenerUrlImagen(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de ass: ${error.message}`);
  }
}

async function wantapibikinis() {
  const url = 'https://wantbot.xyz/wantapibikinis/';
  try {
    const imageUrl = await obtenerUrlImagen(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de ass: ${error.message}`);
  }
}

async function wantapidog() {
  const url = 'https://wantbot.xyz/wantapidog/';
  try {
    const imageUrl = await obtenerUrlImagen(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de ass: ${error.message}`);
  }
}

async function wantapiwaifuexotica() {
  const url = 'https://wantbot.xyz/wantapiwaifuexotica/';
  try {
    const imageUrl = await obtenerUrlImagen(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de ass: ${error.message}`);
  }
}

module.exports = {
  wantapiwaifu,
  wantapiass,
  wantapibikinis,
  wantapidog,
  wantapiwaifuexotica
};