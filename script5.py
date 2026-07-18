import re

def remove_imports(filepath, unused_vars):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    for line in lines:
        if line.strip().startswith('import '):
            # Check if any unused var is in this line
            should_remove = False
            for var in unused_vars:
                # regex to match "import var from" or "import { var }"
                if re.search(r'\b' + var + r'\b', line):
                    should_remove = True
                    break
            if should_remove:
                continue
        new_lines.append(line)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

# Home.jsx
remove_imports('src/pages/Home.jsx', [
    'attaricedal', 'petcare', 'cleaningessentials', 
    'babycare', 'chickenmeatfish', 'colddrinksjuices', 
    'teacoffeedrinks'
])

# ShopCart.jsx
remove_imports('src/pages/Shop/ShopCart.jsx', [
    'productimage1', 'productimage2', 'productimage3', 
    'productimage4', 'productimage5'
])

# ShopCheckOut.jsx
remove_imports('src/pages/Shop/ShopCheckOut.jsx', [
    'productimage1', 'productimage2', 'productimage3', 'productimage4'
])

# ShopWishList.jsx
remove_imports('src/pages/Shop/ShopWishList.jsx', [
    'productimage15', 'productimage16', 'productimage17', 
    'productimage18', 'productimage19'
])
