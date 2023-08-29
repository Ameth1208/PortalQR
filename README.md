# Custom PortalQR

- [Insgram](https://instagram.com/ameth12_08?igshid=NGExMmI2YTkyZg==) un Follow para apoyar ⭐

- [GitHub](https://github.com/Ameth1208/) GitHub personal.

- [Qwik Docs](https://qwik.builder.io/)

- [Qwik GitHub](https://github.com/BuilderIO/qwik)

- [@QwikDev](https://twitter.com/QwikDev)

- [Vite](https://vitejs.dev/)

---

## Example:

![](https://github.com/Ameth1208/PortalQR/blob/main/.github/webPortal.png)

## Estructura

La estructura de carpetas del proyecto ha sido modificada para adaptarla a las necesidades del portal personalizado. A continuación se detalla la nueva estructura:

```
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

En la carpeta `src/components/` se encuentran los componentes utilizados para construir la interfaz del portal. Esta carpeta puede ser modificada según las necesidades específicas del proyecto, permitiendo agregar, eliminar o modificar componentes.

En la carpeta `src/routes/` se definen las rutas del portal, es decir, las URL y las correspondientes acciones asociadas a ellas. Aquí también se pueden realizar modificaciones y agregar nuevas rutas según los requisitos del proyecto.

## Desarrollo ✏️

El desarrollo del portal personalizado ha sido creado por Ameth Galarcio, quien aprovechó los módulos ya existentes del proyecto original para construir la versión personalizada. Esto significa que se utilizaron como base los componentes y funcionalidades proporcionados en el proyecto original, pero se realizaron modificaciones y adaptaciones para cumplir con los requisitos específicos del portal personalizado.[Proyecto Original](https://github.com/codigoencasa/bot-whatsapp).

## Build project 🚀

Para compilar el proyecto y generar la versión de producción, se utiliza el comando `npm run build.full.` Este comando genera dos carpetas:

```shell
npm run build.full # or `yarn build.full`
```

- `./dist/`: Contiene todos los archivos y recursos necesarios para la visualización del proyecto. Aquí se encuentran los archivos HTML, CSS, JavaScript y otros recursos estáticos.

- `./lib/`: Contiene el archivo `portal.http.csj`, el cual es utilizado por el bot para enviar imágenes al portal. Esta carpeta es importante para la integración del portal con el bot de WhatsApp.

## Integración con el bot de WhatsApp 🔢

Para integrar el portal personalizado con el bot de WhatsApp, se recomienda crear una carpeta independiente con un nombre descriptivo. En este ejemplo, la carpeta se llama "portalWeb":

```
└── portalWeb/
   ├── dist/
   │   └── ...
   └── lib/
        └── ...
```

Luego, se debe instalar la librería del portal personalizado utilizando el comando `npm install file:portalWeb`. Esto permitirá importar y utilizar la librería en el bot de WhatsApp.

Es importante destacar que, debido a los cambios realizados en el portal personalizado, ya no se utilizará la siguiente línea de código para importar la librería:

```js
const QRPortalWeb = require("@ameth1208/portal-qr");
```

```js
const main = async () => {
  const adapterDB = new DataBaseAdapter();
  const adapterFlow = createFlow([flowPrincipal, flowRegister, flowGracias]);
  const adapterProvider = createProvider(WProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb();
};
```

Con la nueva estructura y la instalación de la librería desde la carpeta local, se debe ajustar la importación y el uso del portal personalizado en el bot de WhatsApp según las necesidades específicas del proyecto.

---

<p align="center" 
     >
   <img style={ width="120"; height="150"; object-fit: contain;} src="https://i.imgur.com/Oauef6t.png">
<a href ="https://amethgalarcio.web.app/"><img style={ width="100"; height="150"; object-fit: contain;} src="https://gamma-studio-web.web.app/assets/gs3d.svg"></a>

</p>
