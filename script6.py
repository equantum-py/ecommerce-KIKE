import os
import re

# 1. Update Header.jsx
with open('src/Component/Header.jsx', 'r', encoding='utf-8') as f:
    content = f.read()
# Replace bg-success with badge-oferta for cart badges
content = content.replace('bg-success', 'badge-oferta')
with open('src/Component/Header.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

# 2. Update Footer.jsx
with open('src/Component/Footer.jsx', 'r', encoding='utf-8') as f:
    content = f.read()
# Add antojo-footer to the footer class
content = content.replace('footer mt-8', 'footer mt-8 antojo-footer')
with open('src/Component/Footer.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

# 3. Update Home.jsx
with open('src/pages/Home.jsx', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('#0aad0a', '#D96800')
content = content.replace('btn btn-dark', 'btn btn-antojo-primary')
content = content.replace('btn btn-primary', 'btn btn-antojo-primary')
with open('src/pages/Home.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

# 4. Update ProductItem.jsx
with open('src/ProductList/ProductItem.jsx', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('bg-success', 'badge-disponible')
content = content.replace('btn btn-primary', 'btn btn-antojo-primary')
content = content.replace('text-dark', 'product-price')
content = content.replace('text-muted text-decoration-line-through', 'product-price-old')
with open('src/ProductList/ProductItem.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

# 5. Global replacements for buttons and other files (Shop, ShopCart, ShopCheckOut, SingleShop)
files_to_update = [
    'src/pages/Shop/Shop.jsx',
    'src/pages/Shop/ShopGridCol3.jsx',
    'src/pages/Shop/ShopListCol.jsx',
    'src/pages/Shop/ShopCart.jsx',
    'src/pages/Shop/ShopCheckOut.jsx',
    'src/pages/Shop/ShopWishList.jsx',
    'src/pages/store/SingleShop.jsx'
]

for filepath in files_to_update:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace buttons depending on text
        # Primary: Agregar al carrito, Finalizar compra, Ver productos, Confirmar pedido, Comprar ahora
        # Secondary: Volver, Seguir comprando, Ver detalles, Cancelar
        
        # A simpler approach is to replace all btn-primary with btn-antojo-primary first
        content = content.replace('btn-primary', 'btn-antojo-primary')
        content = content.replace('btn btn-dark', 'btn btn-antojo-primary')
        
        # Then, if any button has "Seguir comprando", replace its class with btn-antojo-secondary
        content = re.sub(r'btn-antojo-primary([^>]*>Seguir comprando)', r'btn-antojo-secondary\1', content)
        content = re.sub(r'btn-antojo-primary([^>]*>Volver)', r'btn-antojo-secondary\1', content)
        content = re.sub(r'btn-antojo-primary([^>]*>Ver detalles)', r'btn-antojo-secondary\1', content)
        content = re.sub(r'btn-antojo-primary([^>]*>Cancelar)', r'btn-antojo-secondary\1', content)
        
        # Update colors
        content = content.replace('#0aad0a', '#D96800')
        content = content.replace('bg-success', 'badge-disponible')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

