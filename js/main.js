document.addEventListener('DOMContentLoaded', () => {
    // Initialize core components
    const visualizer = new TruckVisualizer('visualization');
    // Define truck dimensions directly since we removed predefinedItems.js
    const TRUCK_WIDTH = 2.4;   // Width in meters
    const TRUCK_HEIGHT = 2.6;  // Height in meters
    const TRUCK_DEPTH = 4.0;   // Length in meters
    
    const binPacker = new BinPacker(TRUCK_WIDTH, TRUCK_HEIGHT, TRUCK_DEPTH);
    let currentItems = [];

    /**
     * Updates the 3D visualization of the truck and its contents
     */
    function updateVisualization() {
        visualizer.clear();
        visualizer.createTruck(TRUCK_WIDTH, TRUCK_HEIGHT, TRUCK_DEPTH);
        const packedItems = binPacker.packItems(currentItems);
        packedItems.forEach(item => visualizer.addItem(item));
    }

    /**
     * Updates the HTML list of items without packing them
     */
    function updateItemsList() {
        const itemsList = document.getElementById('items-list');
        itemsList.innerHTML = '';
        
        currentItems.forEach((item) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item-entry';
            itemDiv.innerHTML = `
                <span class="item-id">#${item.id}</span>
                ${item.name} (${item.width}m × ${item.height}m × ${item.depth}m, ${item.weight}kg, Qty: ${item.amount})
                <span class="delete-btn" data-id="${item.id}">×</span>
            `;
            itemsList.appendChild(itemDiv);
        });

        // Update delete button handlers
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = e.target.dataset.id;
                currentItems = currentItems.filter(item => item.id !== itemId);
                updateItemsList();
            });
        });
    }

    /**
     * Parse CSV content into Item objects
     * @param {string} csvContent - Raw CSV content
     * @returns {Item[]} Array of parsed items
     */
    function parseCSV(csvContent) {
        const lines = csvContent.split('\n');
        const items = [];
        
        // Skip header row if present
        const startIndex = lines[0].toLowerCase().includes('name') ? 1 : 0;
        
        for (let i = startIndex; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line) {
                const [name, width, height, depth, weight, amount] = line.split(',').map(val => val.trim());
                
                // Validate data
                if (!name || !width || !height || !depth || !weight) {
                    console.warn(`Skipping invalid line ${i + 1}: ${line}`);
                    continue;
                }

                const item = new Item(
                    name,
                    parseFloat(width),
                    parseFloat(height),
                    parseFloat(depth),
                    parseFloat(weight),
                    parseInt(amount) || 1
                );
                items.push(item);
            }
        }
        return items;
    }

    // Form submission handler
    document.getElementById('item-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const width = parseFloat(document.getElementById('width').value);
        const height = parseFloat(document.getElementById('height').value);
        const depth = parseFloat(document.getElementById('depth').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const amount = parseInt(document.getElementById('amount').value) || 1;

        // Create new item without explicit ID
        const newItem = new Item(name, width, height, depth, weight, amount);
        currentItems.push(newItem);
        
        e.target.reset();
        document.getElementById('amount').value = '1'; // Reset amount to default
        
        updateItemsList(); // Only update the list, not the visualization
    });

    // Add click handler for the upload button
    const uploadButton = document.getElementById('upload-csv');
    const fileInput = document.getElementById('csv-upload');

    uploadButton.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                try {
                    const items = parseCSV(e.target.result);
                    if (items.length > 0) {
                        currentItems = items;
                        updateItemsList();
                        alert(`Successfully loaded ${items.length} items from CSV`);
                    } else {
                        alert('No valid items found in CSV file');
                    }
                } catch (error) {
                    console.error('Error parsing CSV:', error);
                    alert('Error parsing CSV file. Please check the format.');
                }
            };

            reader.onerror = (error) => {
                console.error('Error reading file:', error);
                alert('Error reading file');
            };

            reader.readAsText(file);
        }
    });

    // Calculate packing button handler
    document.getElementById('calculate').addEventListener('click', () => {
        visualizer.clear();
        visualizer.createTruck(TRUCK_WIDTH, TRUCK_HEIGHT, TRUCK_DEPTH);
        updateVisualization();
    });

    // Initialize empty truck visualization
    visualizer.createTruck(TRUCK_WIDTH, TRUCK_HEIGHT, TRUCK_DEPTH);
});