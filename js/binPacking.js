class BinPacker {
    constructor(truckWidth = 2.4, truckHeight = 2.6, truckDepth = 4.0) {
        this.truckWidth = truckWidth;
        this.truckHeight = truckHeight;
        this.truckDepth = truckDepth;
        this.organizedItems = [];
        this.colors = ['red', 'blue', 'orange', 'purple', 'yellow', 'cyan', 'magenta', 'brown'];
    }

    checkSpaceAvailable(item, x, y, z) {
        // Check if item fits within truck boundaries
        if (x + item.width > this.truckWidth ||
            y + item.depth > this.truckDepth ||
            z + item.height > this.truckHeight) {
            return false;
        }

        // Check for overlap with existing items
        for (const placedItem of this.organizedItems) {
            const xOverlap = x < placedItem.x + placedItem.width && 
                           x + item.width > placedItem.x;
            const yOverlap = y < placedItem.y + placedItem.depth && 
                           y + item.depth > placedItem.y;
            const zOverlap = z < placedItem.z + placedItem.height && 
                           z + item.height > placedItem.z;
            
            if (xOverlap && yOverlap && zOverlap) {
                return false;
            }
        }
        return true;
    }

    findNextPosition(item) {
        let z = 0;
        while (z + item.height <= this.truckHeight) {
            let y = 0;
            while (y + item.depth <= this.truckDepth) {
                let x = 0;
                while (x + item.width <= this.truckWidth) {
                    if (this.checkSpaceAvailable(item, x, y, z)) {
                        return {
                            x: Math.round(x * 100) / 100,
                            y: Math.round(y * 100) / 100,
                            z: Math.round(z * 100) / 100
                        };
                    }
                    x += 0.1;
                }
                y += 0.1;
            }
            z += 0.1;
        }
        return null;
    }

    packItems(items) {
        // Sort items by volume in descending order
        const sortedItems = [...items].sort((a, b) => b.volume - a.volume);
        this.organizedItems = [];
        const unplacedItems = [];

        sortedItems.forEach((item, index) => {
            const position = this.findNextPosition(item);
            if (position) {
                item.x = position.x;
                item.y = position.y;
                item.z = position.z;
                item.color = this.colors[index % this.colors.length];
                this.organizedItems.push(item);

                console.log(
                    `${index + 1}. ${item.name} (${item.color}):\n` +
                    `   x: ${position.x.toFixed(2)} to ${(position.x + item.width).toFixed(2)} (Width: ${item.width}m)\n` +
                    `   y: ${position.y.toFixed(2)} to ${(position.y + item.depth).toFixed(2)} (Depth: ${item.depth}m)\n` +
                    `   z: ${position.z.toFixed(2)} to ${(position.z + item.height).toFixed(2)} (Height: ${item.height}m)`
                );
            } else {
                unplacedItems.push(item);
                console.log(`Cannot fit item ${item.name} (${item.width}m x ${item.height}m x ${item.depth}m) in the truck.`);
            }
        });

        if (unplacedItems.length > 0) {
            console.log("\n=== Unplaced Items ===");
            unplacedItems.forEach(item => {
                console.log(`- ${item.name} (${item.width}m x ${item.height}m x ${item.depth}m)`);
            });
            console.log("=".repeat(35));
        }

        return this.organizedItems;
    }
}