from item_loader import load_items_from_csv, manual_item_entry
from packing import pack_items
from visualize import visualize_truck

TRUCK_DIMENSIONS = (100, 100, 100)  # Width, Height, Depth in arbitrary units

def main():
    print("Truck Packing Calculator")
    print("1. Load items from CSV")
    print("2. Enter items manually")
    choice = input("Choose input method (1/2): ")

    if choice == '1':
        filename = input("Enter CSV file path: ")
        items = load_items_from_csv(filename)
    else:
        items = manual_item_entry()

    packed_items = pack_items(items, TRUCK_DIMENSIONS)
    visualize_truck(packed_items, TRUCK_DIMENSIONS)

if __name__ == "__main__":
    main()

