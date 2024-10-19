# Logistics Convoy Loading Optimization

## Overview

This project is a Python-based application developed during reservist duty to optimize logistic convoy loading. It features a 3D bin packing visualization tool designed with a user-friendly interface using Streamlit, allowing for efficient cargo management in military logistics.

## Features

- **3D Visualization**: Visualizes the arrangement of items in a 3D space, allowing users to see how cargo fits into military vehicles.
- **Customizable Bin Sizes**: Supports predefined trunk sizes for various military vehicles, which users can select based on their needs.
- **User Input for Items**: Allows users to input details about the items to be loaded, including dimensions and weight.
- **Efficient Packing Algorithm**: Implements a packing algorithm to optimally organize items within the specified bin dimensions.

## Getting Started

### Prerequisites

- Python 3.x
- Required libraries: 
  - Streamlit
  - Matplotlib
  - mpl_toolkits
  - Other libraries as necessary (e.g., NumPy)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the required packages:

   ```bash
   pip install -r requirements.txt
   ```

### Running the Application

To run the application, execute the following command in your terminal:

```bash
python main.py
```

### How It Works

1. **Choose Bin Size**: When prompted, select a bin size from the available options for military vehicles.
2. **Enter Bin Height**: Input the height for the selected bin.
3. **Input Items**: You will be asked to enter details for the items you want to pack, including their name, width, height, depth, and weight.
4. **Packing and Visualization**: The application will organize the items within the chosen bin dimensions and visualize the arrangement in 3D.

### Example Input

```
Choose a bin size from the following options:
1. REO M809 - Length: 4m, Width: 2.44m
2. Oshkosh HEMTT - Length: 4m, Width: 2.5m
3. HMMWV (Humvee) - Length: 2m, Width: 2m

Enter the number of your choice: 1
Enter bin height (m): 1.5
How many items do you want to add? 2
Enter name of item 1: Item A
Enter width of Item A (m): 1
Enter height of Item A (m): 0.5
Enter depth of Item A (m): 1
Enter weight of Item A (kg): 100
Enter name of item 2: Item B
Enter width of Item B (m): 1
Enter height of Item B (m): 0.5
Enter depth of Item B (m): 1
Enter weight of Item B (kg): 150
```

### Visual Output

After processing the input, the application will display a 3D visualization of the packed items, allowing users to see how well they fit within the selected bin.

## Project Structure

```
.
├── main.py                  # Main script to run the application
├── item.py                  # Contains the Item class definition
├── bin_packing.py           # Logic for organizing items within the bin
├── visualization.py          # 3D visualization functions
├── requirements.txt          # List of required packages
└── README.md                 # Project documentation
```

## Contributing

If you would like to contribute to this project, feel free to submit a pull request or create an issue.

## License

This project is licensed under the MIT License.

