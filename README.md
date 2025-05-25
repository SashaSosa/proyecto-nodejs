# 🛍️ Gestión de Productos CLI con Node.js y FakeStore API

Este proyecto es una **aplicación de línea de comandos (CLI)** desarrollada con Node.js que simula la gestión de productos, interactuando con la **[FakeStore API](https://fakestoreapi.com/)**. Permite a los usuarios consultar, crear y eliminar productos directamente desde la terminal.

---

## 🚀 Funcionalidades Implementadas

La aplicación soporta las siguientes operaciones de gestión de productos:

* **Consultar Todos los Productos:** Obtiene una lista completa de todos los productos disponibles en la FakeStore API.
* **Consultar un Producto Específico:** Recupera los detalles de un producto individual utilizando su ID.
* **Crear un Producto Nuevo:** Envía datos para simular la creación de un nuevo producto en la API.
* **Eliminar un Producto:** Simula la eliminación de un producto por su ID.

---

## 🛠️ Tecnologías Utilizadas

* **Node.js**: Entorno de ejecución para JavaScript.
* **npm**: Gestor de paquetes de Node.js.
* **Git**: Sistema de control de versiones.
* **`node-fetch`**: Librería para realizar peticiones HTTP en Node.js (implementa la API `Workspace` del navegador).
* **FakeStore API**: API RESTful de prueba para simular una tienda de comercio electrónico.

---

## ⚙️ Configuración y Ejecución Local

Sigue estos pasos para poner en marcha el proyecto en tu máquina local:

### Requisitos Previos

Asegúrate de tener instalado lo siguiente:

* **[Node.js y npm](https://nodejs.org/es/)**: Descarga la versión LTS (recomendada). npm se incluye con Node.js.
* **[Git](https://git-scm.com/downloads)**: Para clonar el repositorio y gestionar el control de versiones.

### Pasos de Instalación

1.  **Clona el repositorio:**
    Abre tu terminal (o la terminal integrada de VS Code) y ejecuta:
    ```bash
    git clone [https://github.com/](https://github.com/)[TU_USUARIO_GITHUB]/[NOMBRE_DE_TU_REPOSITORIO].git
    ```
    Reemplaza `[TU_USUARIO_GITHUB]` con tu nombre de usuario de GitHub y `[NOMBRE_DE_TU_REPOSITORIO]` con el nombre de tu repositorio.

2.  **Navega al directorio del proyecto:**
    ```bash
    cd [NOMBRE_DE_TU_REPOSITORIO]
    ```

3.  **Instala las dependencias:**
    ```bash
    npm install
    ```
    Esto instalará la librería `node-fetch` necesaria para las peticiones a la API.

---

## 🚀 Uso de la Aplicación

Una vez configurado, puedes interactuar con la FakeStore API utilizando el script `start` definido en `package.json`.

### 1. Consultar Todos los Productos

Para obtener la lista completa de productos:

```bash
npm run start GET products
