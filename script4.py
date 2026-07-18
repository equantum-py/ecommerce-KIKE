import re

with open('src/pages/Home.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'<h3[^>]*>10 minute grocery now</h3>', '<h3 className="h5 mb-3">Preparación casera</h3>', content)
content = re.sub(r'<h3[^>]*>Wide Assortment</h3>', '<h3 className="h5 mb-3">Ingredientes seleccionados</h3>', content)
content = re.sub(r'<h3[^>]*>Easy Returns</h3>', '<h3 className="h5 mb-3">Pedidos fáciles</h3>', content)
content = re.sub(r'Best Prices &amp; Offers', 'Sabor que recuerda a casa', content)

with open('src/pages/Home.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
