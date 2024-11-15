const TRUCK_WIDTH = 2.4;   // Width in meters
const TRUCK_HEIGHT = 2.6;  // Height in meters
const TRUCK_DEPTH = 4.0;   // Length in meters

/**
 * Generate a unique ID for predefined items
 * @returns {string} Unique identifier
 */
function generateId() {
    return 'pred_' + Math.random().toString(36).substr(2, 9);
}

const predefinedItems = [
    new Item("Small Box", 0.5, 0.5, 0.5, 5, 3, generateId()),
    new Item("Medium Box", 0.5, 0.5, 0.5, 8, 2, generateId()),
    new Item("Tool Kit", 0.5, 0.5, 0.5, 3, 1, generateId()),
    new Item("First Aid Kit", 0.5, 0.5, 0.5, 2, 2, generateId()),
    new Item("Water Canister", 0.5, 0.5, 0.5, 7, 1, generateId()),
    new Item("Fire Extinguisher", 0.2, 0.6, 0.2, 4, 1, generateId()),
    new Item("Camping Chair", 0.5, 0.9, 0.5, 2.5, 1, generateId()),
    new Item("Flashlight", 0.1, 0.3, 0.1, 0.5, 1, generateId()),
    new Item("Rations Pack", 0.3, 0.2, 0.4, 1, 1, generateId()),
    new Item("Blanket", 0.5, 0.1, 0.5, 1, 1, generateId()),
    
    // Larger items
    new Item("Item 11", 1.0, 1.0, 1.0, 15, 1, generateId()),
    new Item("Item 12", 1.5, 1.5, 1.5, 20, 1, generateId()),
    new Item("Item 13", 0.8, 1.0, 1.2, 10, 1, generateId()),
    new Item("Item 14", 1.2, 1.2, 1.2, 18, 1, generateId()),
    new Item("Item 15", 0.6, 0.6, 0.6, 3, 1, generateId()),
    new Item("Item 16", 0.5, 1.0, 0.5, 8, 1, generateId()),
    new Item("Item 17", 1.5, 0.5, 1.5, 12, 1, generateId()),
    new Item("Item 18", 1.0, 0.8, 1.2, 9, 1, generateId()),
    new Item("Item 19", 0.7, 1.1, 0.7, 5, 1, generateId()),
    new Item("Item 20", 0.9, 0.5, 1.1, 7, 1, generateId())
];

console.log('predefinedItems.js loaded:', {
    TRUCK_WIDTH,
    TRUCK_HEIGHT,
    TRUCK_DEPTH,
    predefinedItemsCount: predefinedItems.length,
    firstItem: predefinedItems[0],
    lastItem: predefinedItems[predefinedItems.length - 1]
});