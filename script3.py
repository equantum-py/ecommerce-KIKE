import os
import re

for root, _, files in os.walk('src'):
    for f in files:
        if f.endswith('.jsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Find all img tags that use the predetermined image and ensure they have the predetermined-img class
            content = re.sub(r'(<img[^>]*src="/images/producto-predeterminado\.svg"[^>]*className=")([^"]*)(")', r'\1\2 predetermined-img\3', content)
            
            with open(path, 'w', encoding='utf-8') as file:
                file.write(content)
