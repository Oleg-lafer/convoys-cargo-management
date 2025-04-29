import csv

def load_items_from_csv(file_path):
    items = []
    with open(file_path, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            item = {
                'name': row['name'],
                'width': int(row['width']),
                'height': int(row['height']),
                'depth': int(row['depth']),
            }
            items.append(item)
    return items

def manual_item_entry():
    items = []
    while True:
        name = input("Item name (or 'done' to finish): ")
        if name.lower() == 'done':
            break
        width = int(input("Width: "))
        height = int(input("Height: "))
        depth = int(input("Depth: "))
        items.append({
            'name': name,
            'width': width,
            'height': height,
            'depth': depth
        })
    return items
