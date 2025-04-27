# Truck Packing Calculator

<div style="display: flex;">
  <img src="bin algo.PNG" width="25%">
</div>

## Overview
The Truck Packing Calculator is a web application that visualizes the packing of items into a truck. It allows users to add items, either manually or via CSV upload, and calculates how to best fit these items within a specified truck size. The application uses Three.js for 3D visualization.

## Features
- **3D Visualization**: View the truck and its contents in a 3D environment.
- **Item Management**: Add, delete, and manage items to be packed.
- **CSV Upload**: Import items from a CSV file for bulk addition.
- **Dynamic Packing Calculation**: Automatically calculates the best arrangement of items within the truck.

## Technologies Used
- **HTML/CSS**: For the structure and styling of the web application.
- **JavaScript**: For the application logic and interactivity.
- **Three.js**: A JavaScript library for creating 3D graphics in the browser.
- **Bin Packing Algorithm**: To efficiently pack items into the truck.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/truck-packing-calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd truck-packing-calculator
   ```
3. Open `index.html` in your web browser.

## Usage
1. **Add Items**: Fill in the item details (name, dimensions, weight, quantity) and click "Add Item".
2. **Upload CSV**: Click "Upload CSV" to select a CSV file containing item details.
3. **Calculate Packing**: Click "Calculate Packing" to visualize how the items fit into the truck.
4. **Delete Items**: Click the delete button next to an item in the list to remove it.

## CSV Format
The CSV file should have the following format:
name,width,height,depth,weight,amount
Item1,2.0,2.5,3.0,10.0,1
Item2,1.5,1.5,2.0,5.0,2





- The first row is optional and can be a header.
- Each subsequent row represents an item.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any changes or improvements.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [Three.js](https://threejs.org/) for the 3D rendering capabilities.
- [Bin Packing Algorithm](https://en.wikipedia.org/wiki/Bin_packing) for efficient item arrangement.

