# 🚛 Truck Packing Calculator

<div style="display: flex;">
  <img src="bin algo.PNG" width="100%">
</div>


A lightweight Python application that simulates and visualizes how items are packed into a truck in 3D.  
Easily add items manually or via CSV and see how they fit using a simple bin-packing algorithm and 3D visualization.

---

## ✨ Features

- 📦 **Manual or CSV Item Input**  
  Add items via console input or bulk import using a CSV file.

- 🧠 **Simple Bin-Packing Algorithm**  
  Automatically arranges items in the truck while attempting to minimize wasted space.

- 📊 **3D Visualization**  
  Uses `matplotlib` to render a 3D model of the truck and the packed boxes.

- ❌ **Overflow Detection**  
  Items that can't fit in the truck are reported.

---

## 📁 Project Structure

```
truck_packing/
├── main.py             # Entry point for the application
├── packing.py          # Contains the packing algorithm
├── item_loader.py      # Handles CSV and manual item input
├── visualize.py        # Creates a 3D visualization using matplotlib
└── items.csv           # (Optional) Sample item file
```

---

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/truck-packing-calculator.git
cd truck_packing-calculator
```

### 2. Install dependencies

```bash
pip install matplotlib
```

---

## 📥 Input Methods

### Option 1: Manual Entry  
You'll be prompted to input item dimensions and names via console.

### Option 2: CSV Input  
Prepare a file named `items.csv` like this:

```csv
name,width,height,depth
Box A,20,30,10
Box B,40,20,30
Box C,10,10,10
Box D,50,40,20
```

---

## ▶️ Running the Application

```bash
python main.py
```

Follow the on-screen prompts to choose input method and visualize the result.

---

## 🧠 How It Works

- The truck has fixed dimensions (`100 x 100 x 100` units by default).
- The packing algorithm attempts to place items in rows and layers.
- Items are placed from left to right, front to back, bottom to top.
- If an item doesn't fit in the remaining space, it's skipped with a warning.

---

## 🖼️ Visualization Sample

![Truck Packing Visualization](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/3D_Box_Example.png/640px-3D_Box_Example.png)

(Replace with a screenshot of your actual output if available.)

---

## 🚀 Future Improvements

- Replace algorithm with 3D bin-packing heuristic (e.g. Guillotine / Skyline / Genetic Algorithm)
- Save/load packing plans
- Add GUI using PyQt or Tkinter
- Export result as image or interactive HTML

---
