from item import Item
from bin_packing import organize_items
from visualization import visualize_3d

# Predefined trunk sizes for military vehicles
BIN_SIZES = {
    "1": ("REO M809", 4, 2.44),
    "2": ("Oshkosh HEMTT", 4, 2.5),
    "3": ("HMMWV (Humvee)", 2, 2)
}

def choose_bin_size():
    """Display predefined bin sizes and get user selection."""
    print("Choose a bin size from the following options:")
    for key, (name, length, width) in BIN_SIZES.items():
        print(f"{key}. {name} - Length: {length}m, Width: {width}m")

    choice = input("Enter the number of your choice: ")
    if choice in BIN_SIZES:
        return BIN_SIZES[choice][1], BIN_SIZES[choice][2]  # Returns (length, width)
    else:
        print("Invalid choice, please try again.")
        return choose_bin_size()  # Recursive call for valid input


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
    bin_length, bin_width = choose_bin_size()
    bin_height = float(input("Enter bin height (m): "))  # Allow height input separately
    items = get_items()

    # Organize the items within the bin
    organized_items = organize_items(bin_width, bin_height, bin_length, items)

    # Visualize the organized items in 3D
    visualize_3d(bin_width, bin_height, bin_length, organized_items)


if __name__ == "__main__":
    main()
