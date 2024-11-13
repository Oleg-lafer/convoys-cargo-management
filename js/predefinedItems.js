const TRUCK_WIDTH = 2.4;   // Width in meters
const TRUCK_HEIGHT = 2.6;  // Height in meters
const TRUCK_DEPTH = 4.0;   // Length in meters

const predefinedItems = [
    new Item("Small Box", 0.5, 0.5, 0.5, 5),
    new Item("Medium Box", 0.5, 0.5, 0.5, 8),
    new Item("Tool Kit", 0.5, 0.5, 0.5, 3),
    new Item("First Aid Kit", 0.5, 0.5, 0.5, 2),
    new Item("Water Canister", 0.5, 0.5, 0.5, 7),
    new Item("Fire Extinguisher", 0.2, 0.6, 0.2, 4),
    new Item("Camping Chair", 0.5, 0.9, 0.5, 2.5),
    new Item("Flashlight", 0.1, 0.3, 0.1, 0.5),
    new Item("Rations Pack", 0.3, 0.2, 0.4, 1),
    new Item("Blanket", 0.5, 0.1, 0.5, 1),
    
    // Larger items
    new Item("Item 11", 1.0, 1.0, 1.0, 15),
    new Item("Item 12", 1.5, 1.5, 1.5, 20),
    new Item("Item 13", 0.8, 1.0, 1.2, 10),
    new Item("Item 14", 1.2, 1.2, 1.2, 18),
    new Item("Item 15", 0.6, 0.6, 0.6, 3),
    new Item("Item 16", 0.5, 1.0, 0.5, 8),
    new Item("Item 17", 1.5, 0.5, 1.5, 12),
    new Item("Item 18", 1.0, 0.8, 1.2, 9),
    new Item("Item 19", 0.7, 1.1, 0.7, 5),
    new Item("Item 20", 0.9, 0.5, 1.1, 7)
];

console.log('predefinedItems.js loaded:', {
    TRUCK_WIDTH,
    TRUCK_HEIGHT,
    TRUCK_DEPTH,
    predefinedItemsCount: predefinedItems.length,
    firstItem: predefinedItems[0],
    lastItem: predefinedItems[predefinedItems.length - 1]
});