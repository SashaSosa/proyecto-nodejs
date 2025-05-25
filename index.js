// index.js

import fetch from 'node-fetch'; // Esta línea es una importación de la librería node-fetch

const BASE_URL = 'https://fakestoreapi.com/products'; // Aquí definimos una constante llamada BASE_URL. Almacenamos la URL base de la API de FakeStore con la que vamos a interactuar.
// Esta URL es la que utilizaremos para hacer las peticiones a la API.

async function main() {
  const args = process.argv.slice(2);
  const command = args[0]; // GET, POST, DELETE
  const resource = args[1]; // products, products/<productId>

  if (command === 'GET') {
    if (resource === 'products') {
      // 1. Consultar Todos los Productos
      try {
        const response = await fetch(BASE_URL);
        const products = await response.json();
        console.log(products);
      } catch (error) {
        console.error('Error al obtener todos los productos:', error);
      }
    } else if (resource && resource.startsWith('products/')) {
      // 2. Consultar un Producto Específico
      const productId = resource.split('/')[1];
      if (productId) {
        try {
          const response = await fetch(`${BASE_URL}/${productId}`);
          const product = await response.json();
          console.log(product);
        } catch (error) {
          console.error(`Error al obtener el producto con ID ${productId}:`, error);
        }
      } else {
        console.log('Formato incorrecto. Uso para GET: npm run start GET products o npm run start GET products/<productId>');
      }
    } else {
      console.log('Comando GET no reconocido. Uso: npm run start GET products o npm run start GET products/<productId>');
    }
  } else if (command === 'POST') {
    // 3. Crear un Producto Nuevo
    if (resource === 'products') {
      const title = args[2];
      const price = parseFloat(args[3]); // Convertir a número
      const category = args[4];

      if (title && !isNaN(price) && category) {
        try {
          const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: title,
              price: price,
              description: 'Descripción por defecto', // La API de FakeStore pide una descripción
              image: 'https://i.pravatar.cc', // La API de FakeStore pide una imagen
              category: category,
            }),
          });
          const newProduct = await response.json();
          console.log(newProduct);
        } catch (error) {
          console.error('Error al crear el producto:', error);
        }
      } else {
        console.log('Formato incorrecto. Uso para POST: npm run start POST products <title> <price> <category>');
      }
    } else {
      console.log('Comando POST no reconocido. Uso: npm run start POST products <title> <price> <category>');
    }
  } else if (command === 'DELETE') {
    // 4. Eliminar un Producto
    if (resource && resource.startsWith('products/')) {
      const productId = resource.split('/')[1];
      if (productId) {
        try {
          const response = await fetch(`${BASE_URL}/${productId}`, {
            method: 'DELETE',
          });
          const deletedProduct = await response.json();
          console.log(deletedProduct);
        } catch (error) {
          console.error(`Error al eliminar el producto con ID ${productId}:`, error);
        }
      } else {
        console.log('Formato incorrecto. Uso para DELETE: npm run start DELETE products/<productId>');
      }
    } else {
      console.log('Comando DELETE no reconocido. Uso: npm run start DELETE products/<productId>');
    }
  } else {
    console.log('Comando no reconocido. Usos válidos:');
    console.log('  npm run start GET products');
    console.log('  npm run start GET products/<productId>');
    console.log('  npm run start POST products <title> <price> <category>');
    console.log('  npm run start DELETE products/<productId>');
  }
}

// Ejecuta la función principal
main();