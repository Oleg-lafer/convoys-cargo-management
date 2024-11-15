/**
 * Class representing a physical item to be packed in the truck
 */
class Item {
    /**
     * Create a new Item
     * @param {string} name - The name of the item
     * @param {number} width - Width of the item in meters
     * @param {number} height - Height of the item in meters
     * @param {number} depth - Depth of the item in meters
     * @param {number} weight - Weight of the item in kilograms
     * @param {number} [amount=1] - Quantity of this item (default: 1)
     * @param {string} [id=null] - Unique identifier for the item (auto-generated if not provided)
     */
    constructor(name, width, height, depth, weight, amount = 1, id = null) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.weight = weight;
        this.amount = amount;
        // Generate random ID if none provided
        this.id = id || Math.random().toString(36).substr(2, 9);
        
        // Calculate volume in cubic meters
        this.volume = width * height * depth;
        
        // Position coordinates (set by bin packing algorithm)
        this.x = 0;
        this.y = 0;
        this.z = 0;
        
        // Color assigned during visualization (set by bin packing algorithm)
        this.color = null;
    }

    /**
     * Creates a clone of this item
     * @returns {Item} A new Item instance with the same properties
     */
    clone() {
        return new Item(
            this.name,
            this.width,
            this.height,
            this.depth,
            this.weight,
            this.amount,
            this.id
        );
    }

    /**
     * Returns a string representation of the item
     * @returns {string} Item details as a string
     */
    toString() {
        return `${this.name} (${this.width}x${this.height}x${this.depth}m, ${this.weight}kg, Qty: ${this.amount})`;
    }
}