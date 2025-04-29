def pack_items(items, truck_dimensions):
    packed_items = []
    x, y, z = 0, 0, 0
    layer_height = 0

    truck_width, truck_height, truck_depth = truck_dimensions

    for item in items:
        w, h, d = item['width'], item['height'], item['depth']
        
        # Check if item fits in current row
        if x + w > truck_width:
            x = 0
            z += layer_height
            layer_height = 0

        if z + d > truck_depth:
            y += h
            z = 0
            x = 0
            layer_height = 0

        if y + h > truck_height:
            print(f"Item '{item['name']}' does not fit in the truck!")
            continue

        item['position'] = (x, y, z)
        packed_items.append(item)

        x += w
        layer_height = max(layer_height, d)

    return packed_items
