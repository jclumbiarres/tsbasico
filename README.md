# Ejemplo básico de TS - Hexagonal

---

En este ejemplo básico hay:

- ESLint
- Prettier
- ts-jest
- nodemon
- VSCode Debugging
- Github Actions
- Pequeño ejemplo de código funcional con import

La configuración del debugger apunta a src/index.ts como archivo de inicio del proyecto.

Comandos:

Testing:

```sh
npm run test
```

Ejecuta los tests ignorando los que existan en dist/

Prettier format:

```sh
npm run prettier-format
```

Ejecuta manualmente el prettier en el proyecto, recomiendo instalar la extensión prettier y que se autoejecute al guardar.

Watcher:

```sh
npm run dev:watcher
```

Ejecuta nodemon usando src/index.ts como archivo inicial

Dev Run:

```sh
npm run dev:run
```

Ejecuta el proyecto sin watcher

Build:

```sh
npm run build
```

Transpila el proyecto en dist/

---

## Debugger

en el archivo .vscode/launch.json está la configuración del debugger.

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Lanza debug",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/src/index.ts",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```

---

- application Este directorio contiene los servicios de aplicación y los objetos de transferencia de datos (DTOs). Los servicios de aplicación son los que coordinan las operaciones de alto nivel que implican a más de una entidad de dominio. Los DTOs son objetos que se utilizan para transferir datos entre procesos o componentes, sin ninguna lógica de negocio.

---

- domain Este directorio contiene las entidades, objetos de valor e interfaces del dominio. Las entidades son los objetos de negocio principales de tu aplicación. Los objetos de valor son objetos inmutables que no tienen una identidad y se distinguen solo por el estado de sus propiedades. Las interfaces del dominio definen las operaciones que se pueden realizar en las entidades y objetos de valor.

---

- infrastructure Este directorio contiene la implementación de los repositorios, servicios y cualquier otra infraestructura necesaria. Los repositorios son los que manejan la persistencia de las entidades. Los servicios de infraestructura pueden ser cualquier cosa que proporcione capacidades técnicas, como el envío de correos electrónicos, la persistencia de datos, etc.

---

- interfaces Este directorio contiene los controladores, rutas y middlewares de la aplicación. Los controladores manejan las solicitudes HTTP y delegan el trabajo a los servicios de aplicación. Las rutas definen las rutas HTTP de tu aplicación. Los middlewares son funciones que tienen acceso al objeto de solicitud, al objeto de respuesta y al siguiente middleware en el ciclo de solicitud/respuesta de la aplicación.
