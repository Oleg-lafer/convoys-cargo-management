from item import Item
from bin_packing import organize_items
from visualization import visualize_3d


def get_bin_dimensions():
    """Get user input for bin dimensions."""
    width = float(input("Enter bin width (m): "))
    height = float(input("Enter bin height (m): "))
    depth = float(input("Enter bin depth (m): "))
    return width, height, depth


def get_items():
    """Get user input for the list of items."""
    items = []
    n = int(input("How many items do you want to add? "))

    for i in range(n):
        name = input(f"Enter name of item {i + 1}: ")
        width = float(input(f"Enter width of {name} (m): "))
        height = float(input(f"Enter height of {name} (m): "))
        depth = float(input(f"Enter depth of {name} (m): "))
        weight = float(input(f"Enter weight of {name} (kg): "))
        items.append(Item(name, width, height, depth, weight))

    return items


def main():
    print("=== 3D Bin Packing Problem ===")
    bin_width, bin_height, bin_depth = get_bin_dimensions()
    items = get_items()

    # Organize the items within the bin
    organized_items = organize_items(bin_width, bin_height, bin_depth, items)

    # Visualize the organized items in 3D
    visualize_3d(bin_width, bin_height, bin_depth, organized_items)


if __name__ == "__main__":
    main()
