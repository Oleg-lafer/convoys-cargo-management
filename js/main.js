document.addEventListener('DOMContentLoaded', () => {
    const visualizer = new TruckVisualizer('visualization');
    const binPacker = new BinPacker(TRUCK_WIDTH, TRUCK_HEIGHT, TRUCK_DEPTH);
    let currentItems = [];

    function updateVisualization() {
        visualizer.clear();
        visualizer.createTruck(TRUCK_WIDTH, TRUCK_HEIGHT, TRUCK_DEPTH);
        const packedItems = binPacker.packItems(currentItems);
        packedItems.forEach(item => visualizer.addItem(item));
    }

    function updateItemsList() {
        const itemsList = document.getElementById('items-list');
        itemsList.innerHTML = '';
        
        currentItems.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item-entry';
            itemDiv.innerHTML = `
                ${item.name} (${item.width}m &times; ${item.height}m &times; ${item.depth}m, ${item.weight}kg)
                <span class="delete-btn" data-index="${index}">×</span>
            `;
            itemsList.appendChild(itemDiv);
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                currentItems.splice(index, 1);
                updateItemsList();
                updateVisualization();
            });
        });
    }

    document.getElementById('item-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const width = parseFloat(document.getElementById('width').value);
        const height = parseFloat(document.getElementById('height').value);
        const depth = parseFloat(document.getElementById('depth').value);
        const weight = parseFloat(document.getElementById('weight').value);

        const newItem = new Item(name, width, height, depth, weight);
        currentItems.push(newItem);
        
        e.target.reset();
        
        updateItemsList();
        updateVisualization();
    });

    document.getElementById('load-predefined').addEventListener('click', () => {
        currentItems = [...predefinedItems];
        updateItemsList();
        updateVisualization();
    });

    document.getElementById('calculate').addEventListener('click', () => {
        updateVisualization();
    });
});