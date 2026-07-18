import os
import re

for root, _, files in os.walk('src'):
    for f in files:
        if f.endswith('.jsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Remove imports
            content = re.sub(r'import\s+[a-zA-Z0-9_]+\s+from\s+[\'\"].*?(Grocerylogo|product-img|appstore|googleplay).*?[\'\"];\n*', '', content)
            
            # Replace alt texts so we don't have errors but we fix references
            content = re.sub(r'alt="appstore"', 'alt="Antojo Casero App"', content)
            content = re.sub(r'alt="googleplay"', 'alt="Antojo Casero Play"', content)
            
            # In Header and Footer replace `<img src="/images/producto-predeterminado.svg" ... />` with text if it was the logo
            if "Header.jsx" in path or "Footer.jsx" in path:
                content = re.sub(r'<img[^>]*src="/images/producto-predeterminado\.svg"[^>]*width: 200[^>]*/>', '<h2 className="mb-0 text-dark">Antojo Casero</h2>', content)
                content = re.sub(r'<img[^>]*src="/images/producto-predeterminado\.svg"[^>]*alt="logo de pago"[^>]*/>', '', content)
            
            with open(path, 'w', encoding='utf-8') as file:
                file.write(content)
