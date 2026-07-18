import os
import re

for root, _, files in os.walk('src'):
    for f in files:
        if f.endswith('.jsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Remove imports of demo images and appstore/googleplay
            content = re.sub(r'import\s+[a-zA-Z0-9_]+\s+from\s+[\'\"].*?(product-img|category-|grocery-banner|appstore|googleplay).*?[\'\"];\n*', '', content)
            
            # Replace image variables in src={}
            content = re.sub(r'src=\{product[a-zA-Z0-9_]*\}', 'src="/images/producto-predeterminado.svg"', content)
            content = re.sub(r'src=\{productimage[a-zA-Z0-9_]*\}', 'src="/images/producto-predeterminado.svg"', content)
            content = re.sub(r'src=\{appstore\}', 'src="/images/producto-predeterminado.svg"', content)
            content = re.sub(r'src=\{googleplay\}', 'src="/images/producto-predeterminado.svg"', content)
            content = re.sub(r'src=\{Grocerylogo\}', 'src="/images/producto-predeterminado.svg"', content)
            
            with open(path, 'w', encoding='utf-8') as file:
                file.write(content)
