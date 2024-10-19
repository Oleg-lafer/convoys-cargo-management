def organize_items(capacity_width, capacity_height, capacity_depth, items):
    """Organize items within the bin based on volume and space constraints."""
    # Sort items by their volume in descending order (biggest items first)
    items.sort(key=lambda x: x.volume, reverse=True)

    organized_items = []
    used_width = 0
    used_height = 0
    used_depth = 0
    current_row_height = 0
    current_depth_height = 0

    for item in items:
        if used_width + item.width <= capacity_width and used_depth + item.depth <= capacity_depth:
            organized_items.append(item)
            used_width += item.width
            current_row_height = max(current_row_height, item.height)
            current_depth_height = max(current_depth_height, item.depth)
        elif used_height + current_row_height + item.height <= capacity_height:
            used_height += current_row_height
            used_width = item.width
            used_depth += current_depth_height
            current_row_height = item.height
            current_depth_height = item.depth
            organized_items.append(item)
        else:
            print(f"Cannot fit item {item.name} ({item.width}m x {item.height}m x {item.depth}m) in the bin.")

    return organized_items
