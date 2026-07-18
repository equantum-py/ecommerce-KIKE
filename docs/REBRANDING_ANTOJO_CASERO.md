# Rebranding Antojo Casero - Fase 1

## Resumen analizado

El proyecto es una aplicación ecommerce React basada en Create React App. La plantilla original usaba identidad de supermercado/grocery, textos de FreshCart y una paleta verde como color principal.

## Arquitectura visual encontrada

- Rutas principales: `src/App.js` con `BrowserRouter`, `Routes` y páginas de home, tienda, carrito, checkout, wishlist, cuentas, blog, contacto y footer elements.
- Header/navbar: `src/Component/Header.jsx`.
- Footer: `src/Component/Footer.jsx`.
- Home: `src/pages/Home.jsx`.
- Tarjetas/productos: `src/ProductList/ProductItem.jsx`, `src/pages/Shop/*`, `src/pages/store/SingleShop.jsx`.
- Estilos globales: `src/App.css` y `src/index.css`.
- Metadatos: `public/index.html` y `public/manifest.json`.

## Archivos modificados

- `src/App.css`
- `src/App.js`
- `src/Component/Header.jsx`
- `src/Component/Footer.jsx`
- `src/pages/Home.jsx`
- `src/ProductList/ProductItem.jsx`
- `src/pages/Shop/Shop.jsx`
- `src/pages/Shop/ShopGridCol3.jsx`
- `src/pages/Shop/ShopListCol.jsx`
- `src/pages/Shop/ShopCart.jsx`
- `src/pages/Shop/ShopCheckOut.jsx`
- `src/pages/Shop/ShopWishList.jsx`
- `src/pages/store/StoreList.jsx`
- `src/pages/store/SingleShop.jsx`
- `src/pages/Accounts/*`
- `src/pages/About/*`
- `src/pages/FooterElements/*`
- `public/index.html`
- `public/manifest.json`
- `src/setupTests.js`
- `README.md`

## Nueva paleta

- Marrón profundo: `#4A210D`
- Marrón cálido: `#6B2E0B`
- Naranja artesanal: `#D96800`
- Naranja suave: `#E98522`
- Crema principal: `#FFF8EE`
- Crema secundario: `#F7EBDD`
- Beige cálido: `#EAD7C1`
- Blanco: `#FFFFFF`
- Texto principal: `#2D1B12`
- Texto secundario: `#6F5B4D`
- Bordes suaves: `#E5D3C0`
- Éxito/disponibilidad: `#4F7A45`

## Variables de color creadas

Las variables `--brand-*` se agregaron en `:root` dentro de `src/App.css`, junto con overrides de Bootstrap (`--bs-primary`, `--bs-success`, links, body y bordes) para propagar la identidad sin reescribir toda la plantilla.

## Ubicación final del logo

- `public/images/antojo-casero-logo.svg` como fuente vectorial editable y activo principal para header, footer, manifest y pantallas que muestran marca.

## Componentes actualizados

- Header/navbar principal y buscador.
- Footer con logo, nombre de marca visual y eslogan.
- Home con hero y textos principales de Antojo Casero.
- Tarjetas y listados de producto mediante color global, botones, badges, precio, foco y bordes.
- Login/registro y páginas internas visibles mediante reemplazo de branding y paleta.

## Textos reemplazados

Se reemplazaron referencias visibles a FreshCart, Grocery React, Grocery-react, Supermarket y textos comerciales demo por Antojo Casero y mensajes provisionales coherentes con la marca.

## Elementos pendientes

- Sustituir el placeholder de logo por el logo final proporcionado por la marca si se entrega otro archivo.
- Reemplazar imágenes demo de supermercado por fotografías reales de productos caseros.
- Confirmar datos comerciales reales: contacto, dirección, redes, medios de pago, condiciones de envío y promociones.
- Revisar copy completo en español para todas las páginas internas.

## Datos reales pendientes

No se inventaron teléfonos, direcciones, correos, redes, certificaciones, años de experiencia, delivery gratis ni descuentos definitivos.

## Errores previos encontrados

- `npm install` mostró warning de configuración npm `http-proxy` desconocida.
- `npm run build` inicial compiló correctamente, pero mostró warnings de Create React App: `fs.F_OK` deprecado, `caniuse-lite` desactualizado y dependencia no declarada de `babel-preset-react-app`.
- `npm test -- --watchAll=false` falló inicialmente porque `react-slick` requiere `window.matchMedia` en Jest.

## Resultado del build

Después del rebranding, `npm run build` compila correctamente. `npm test -- --watchAll=false` también pasa tras agregar mocks seguros para dependencias visuales en Jest. Se mantienen warnings no bloqueantes heredados de Create React App/dependencias y advertencias existentes de JSX/DOM en algunos componentes.
