# Paquete NPM wantnsfw

La biblioteca wantnsfw es una herramienta simple para la obtención de imágenes NSFW aleatorias de diversas categorías. Diseñada para ser fácil de usar, esta NPM permite a los desarrolladores integrar contenido NSFW en sus aplicaciones, con la posibilidad de obtener imágenes de manera aleatoria a partir de diferentes temáticas.

Características clave:

Aleatoriedad: Proporciona la capacidad de obtener imágenes NSFW de manera aleatoria, ofreciendo variedad en el contenido presentado.

Categorías: Permite a los usuarios seleccionar entre diversas categorías, lo que facilita la personalización del tipo de contenido a recuperar.

Gestión de Errores: Incluye manejo de errores para garantizar una experiencia de usuario suave, proporcionando información detallada en caso de problemas durante la obtención de imágenes.

Esta NPM es ideal para proyectos que requieren la incorporación de contenido NSFW en sus aplicaciones, como bots de Discord o servicios de entretenimiento que desean ofrecer a sus usuarios una experiencia diversa y personalizada.

# Lista

 * wantapiwaifu
 * wantapiass
 * wantapibikinis
 * wantapidog
 * wantapiwaifuexotica
 * WantAPIBoobs
 * WantAPIInfluencers
 * WantAPICosplay

# Soporte

[discord](https://discord.gg/CY6PX5fQA5)
[pagina](https://wantbot.xyz/)



```js
const want = require('wantnsfw');

async function wantapi() {
  try {
    // Obtener una imagen aleatoria de la categoría "waifu"
    const waifuImage = await want.wantapiwaifu();

    // Verificar si se obtuvo una imagen
    if (waifuImage) {
      console.log('Imagen aleatoria de Waifu:', waifuImage);
    } else {
      console.log('No se encontró ninguna imagen.');
    }

  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Ejecutar la función principal
wantapi();