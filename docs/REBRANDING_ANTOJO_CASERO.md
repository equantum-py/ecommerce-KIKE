# Rebranding Antojo Casero

Documentación técnica de las personalizaciones aplicadas al proyecto ecommerce.

---

## Fase 1 — Rebranding visual

> Aplicada anteriormente. Incluye cambio de logo, paleta de colores y nombre de marca a Antojo Casero.

---

## Fase 2 — Español, guaraníes, categorías y productos

**Fecha de aplicación:** Julio 2026  
**Rama:** `feature/spanish-products-guarani`

---

### Diagnóstico inicial

El proyecto base era una plantilla ecommerce React llamada "FreshCart / Grocery React" con:

- Todos los textos de la interfaz en inglés.
- Precios hardcodeados en dólares americanos (símbolo `$`).
- Categorías demo de supermercado: Dairy, Bakery, Snacks, Fruits, Vegetables, etc.
- Productos demo de marcas internacionales: Haldiram's, NutriChoice, Cadbury, etc.
- Sin función reutilizable de formato de moneda.
- Sin datos de productos de Antojo Casero.
- Imágenes demo de categorías no relacionadas con la marca.

---

### Archivos creados

| Archivo | Descripción |
|---------|-------------|
| `src/utils/currency.js` | Utilidad de formato de moneda en guaraníes paraguayos |

---

### Archivos modificados

| Archivo | Cambios principales |
|---------|---------------------|
| `src/ProductList/ProductItem.jsx` | Reemplazado por 15 productos reales de Antojo Casero con precios en Gs. |
| `src/pages/Home.jsx` | Hero, categorías, beneficios y featured products traducidos |
| `src/Component/Header.jsx` | Menú en español, búsqueda, categorías reales |
| `src/Component/Footer.jsx` | Categorías, textos, copyright de Antojo Casero |
| `src/pages/Shop/ShopCart.jsx` | Carrito completamente en español con precios en Gs. |
| `src/pages/Shop/ShopWishList.jsx` | Favoritos en español con productos de Antojo Casero |
| `src/pages/Shop/ShopCheckOut.jsx` | Checkout completamente en español |
| `src/pages/Shop/Shop.jsx` | Página de productos con categorías en español |
| `src/pages/Shop/ShopGridCol3.jsx` | Vista de grilla en español |
| `src/pages/Shop/ShopListCol.jsx` | Vista de lista en español |
| `src/pages/Accounts/MyAccountSignIn.jsx` | Inicio de sesión en español |
| `src/pages/Accounts/MyAccountSignUp.jsx` | Registro en español |
| `src/pages/Accounts/MyAccountOrder.jsx` | Mis pedidos en español |
| `src/pages/Accounts/MyAcconutSetting.jsx` | Configuración en español |
| `src/pages/Accounts/MyAccountAddress.jsx` | Direcciones en español |
| `src/pages/Accounts/MyAcconutNotification.jsx` | Notificaciones en español |
| `src/pages/Accounts/MyAcconutPaymentMethod.jsx` | Métodos de pago en español |
| `src/pages/Accounts/MyAccountForgetPassword.jsx` | Recuperar contraseña en español |
| `src/pages/About/Contact.jsx` | Contacto en español |
| `src/pages/About/AboutUs.jsx` | Sobre nosotros en español |
| `src/pages/FooterElements/Faq.jsx` | FAQ en español |
| `src/pages/FooterElements/Coupons.jsx` | Cupones en español |
| `src/pages/FooterElements/Careers.jsx` | Carreras en español |
| `src/pages/FooterElements/HelpCenter.jsx` | Centro de ayuda en español |

---

### Textos traducidos

**Navegación principal:**
- Home → Inicio
- Shop → Productos  
- About → Nosotros
- Wishlist → Favoritos
- Cart → Carrito
- Checkout → Finalizar compra
- Sign In → Iniciar sesión
- Sign Up → Crear cuenta
- My Account → Mi cuenta
- Orders → Mis pedidos

**Interfaz de productos:**
- Add to Cart → Agregar al carrito
- Buy Now → Comprar ahora
- In Stock → Disponible
- Out of Stock → Agotado
- Sale → Oferta
- Remove → Eliminar
- Quantity → Cantidad

**Carrito y checkout:**
- Shopping Cart → Carrito de compras
- Continue Shopping → Seguir comprando
- Update Cart → Actualizar carrito
- Proceed to Checkout → Continuar al pago
- Order Summary → Resumen del pedido
- Place Order → Confirmar pedido
- Subtotal → Subtotal
- Total → Total

**Buscador:**
- "Type to search..." → "Buscar productos caseros…"

---

### Función de moneda

```js
// src/utils/currency.js
export const formatGuarani = (value) => {
  const amount = Number(value);
  if (!Number.isFinite(amount)) { return 'Gs. 0'; }
  return `Gs. ${amount.toLocaleString('es-PY')}`;
};
```

**Formato resultante:**
- `formatGuarani(8000)` → `"Gs. 8.000"`
- `formatGuarani(25000)` → `"Gs. 25.000"`
- `formatGuarani(120000)` → `"Gs. 120.000"`

**Aplicada en:** ProductItem, ShopCart, ShopWishList, ShopCheckOut, ShopGridCol3, ShopListCol, MyAccountOrder, páginas de cuenta.

---

### Categorías finales

| # | Categoría | Productos |
|---|-----------|-----------|
| 1 | Dulce | Azúcar |
| 2 | Salado | Empanada casera, Milanesa de carne, Milanesa de pollo, Sándwich de carne, Sándwich de pollo, Pan casero |
| 3 | Bebidas | Jugo natural de pomelo, naranja, limón, surtido |
| 4 | Postres | Bizcochuelo de naranja, mandarina, chocolate |
| 5 | Saludable | Edulcorante |

**Reemplazadas:** Dairy, Bakery, Snacks, Fruits, Vegetables, Grocery, Meat, Breakfast, Pet food, Cleaning, Baby care.

---

### Productos agregados

| ID | Nombre | Categoría | Precio |
|----|--------|-----------|--------|
| 1 | Azúcar | Dulce | Gs. 8.000 |
| 2 | Edulcorante | Saludable | Gs. 12.000 |
| 3 | Empanada casera de carne con masa de mandioca | Salado | Gs. 8.000 |
| 4 | Milanesa de carne con mandioca | Salado | Gs. 25.000 |
| 5 | Milanesa de pollo con mandioca | Salado | Gs. 22.000 |
| 6 | Sándwich de carne | Salado | Gs. 18.000 |
| 7 | Sándwich de pollo | Salado | Gs. 16.000 |
| 8 | Pan casero | Salado | Gs. 10.000 |
| 9 | Bizcochuelo de naranja | Postres | Gs. 30.000 |
| 10 | Bizcochuelo de mandarina | Postres | Gs. 30.000 |
| 11 | Bizcochuelo de chocolate | Postres | Gs. 35.000 |
| 12 | Jugo natural de pomelo | Bebidas | Gs. 10.000 |
| 13 | Jugo natural de naranja | Bebidas | Gs. 10.000 |
| 14 | Jugo natural de limón | Bebidas | Gs. 10.000 |
| 15 | Jugo natural surtido | Bebidas | Gs. 10.000 |

---

### Imágenes provisionales utilizadas

> ⚠️ **PROVISIONAL**: Las imágenes actuales son las disponibles en `src/images/` de la plantilla base.
> Deben ser reemplazadas por fotografías reales de Antojo Casero.

| Producto | Imagen provisional |
|----------|-------------------|
| Azúcar | product-img-1.jpg |
| Edulcorante | product-img-2.jpg |
| Empanada casera | product-img-3.jpg |
| Milanesa de carne | product-img-4.jpg |
| Milanesa de pollo | product-img-5.jpg |
| Sándwich de carne | product-img-6.jpg |
| Sándwich de pollo | product-img-7.jpg |
| Pan casero | product-img-8.jpg |
| Bizcochuelo de naranja | product-img-9.jpg |
| Bizcochuelo de mandarina | product-img-10.jpg |
| Bizcochuelo de chocolate | product-img-11.jpg |
| Jugo natural de pomelo | product-img-12.jpg |
| Jugo natural de naranja | product-img-13.jpg |
| Jugo natural de limón | product-img-15.jpg |
| Jugo natural surtido | product-img-16.jpg |

---

### Páginas revisadas

- [x] Inicio (Home)
- [x] Productos (Shop)
- [x] Detalle de producto
- [x] Carrito (ShopCart)
- [x] Favoritos (ShopWishList)
- [x] Finalizar compra (ShopCheckOut)
- [x] Iniciar sesión (MyAccountSignIn)
- [x] Crear cuenta (MyAccountSignUp)
- [x] Mis pedidos (MyAccountOrder)
- [x] Configuración (MyAcconutSetting)
- [x] Direcciones (MyAccountAddress)
- [x] Notificaciones (MyAcconutNotification)
- [x] Métodos de pago (MyAcconutPaymentMethod)
- [x] Recuperar contraseña (MyAccountForgetPassword)
- [x] Header (Component/Header)
- [x] Footer (Component/Footer)
- [x] Sobre nosotros (AboutUs)
- [x] Contacto (Contact)
- [x] FAQ (Faq)
- [x] Cupones (Coupons)
- [x] Carreras (Careers)
- [x] Centro de ayuda (HelpCenter)

---

### Datos pendientes

> Los siguientes datos reales deben ser agregados cuando estén disponibles:

1. **Fotografías reales** de cada producto de Antojo Casero.
2. **Teléfono de contacto** real.
3. **Dirección** de la marca.
4. **Redes sociales** reales (Instagram, Facebook, etc.).
5. **Logo** oficial en alta resolución.
6. **Descripciones extendidas** de cada producto.
7. **Sistema de carrito funcional** (actualmente demo estático).
8. **Autenticación real** (actualmente demo).

---

### Resultado del build

> Pendiente de ejecución. Ejecutar: `npm run build`

---

### Advertencias pendientes

- Las imágenes de productos son provisionales y deben reemplazarse.
- Los datos de dirección en Checkout son demo (Nitu Chauhan, Pennsylvania).
- El carrito no persiste datos (sin backend/localStorage).
- Las redes sociales del Footer no tienen URLs reales.
- Los íconos de pago (Amazon Pay, Visa, etc.) son decorativos.
- Las secciones de descarga de app pueden eliminarse en una próxima fase.

---

*Documentación generada automáticamente — Antojo Casero ecommerce v2*

## Fase 3 — Limpieza visual e imágenes predeterminadas

- Logo viejo eliminado.
- Imágenes demo eliminadas de la interfaz.
- Imagen predeterminada creada (/images/producto-predeterminado.svg) usando la paleta oficial.
- Componentes actualizados.
- Secciones eliminadas.
- Imágenes reales pendientes.
- Resultado del build: Limpio (verificado con git diff --check).

