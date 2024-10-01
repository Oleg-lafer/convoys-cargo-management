import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d.art3d import Poly3DCollection

# Class representing an item with dimensioOpen the Version Control tool window (View > Tool Windows > Version Control).ns, weight, and volume
class Item:
    def __init__(self, name, width, height, depth, weight):
        self.name = name  # Name of the item
        self.width = width  # Width of the item
        self.height = height  # Height of the item
        self.depth = depth  # Depth of the item
        self.weight = weight  # Weight of the item
        self.volume = width * height * depth  # Volume of the item (calculated as width * height * depth)

    def __repr__(self):
        return f"{self.name} ({self.width}m x {self.height}m x {self.depth}m, {self.weight}kg)"

# Function to organize items within the bin
def organize_items(capacity_width, capacity_height, capacity_depth, items):
    # Sort items by their volume in descending order (biggest items first)
    items.sort(key=lambda x: x.volume, reverse=True)

    organized_items = []  # List to hold the items that can be organized
    used_width = 0  # Track the used width within the bin
    used_height = 0  # Track the used height within the bin
    used_depth = 0  # Track the used depth within the bin
    current_row_height = 0  # Track the height of the current row
    current_depth_height = 0  # Track the height of the current depth layer

    for item in items:
        # Check if the item fits in the current layer of the bin (both width and depth)
        if used_width + item.width <= capacity_width and used_depth + item.depth <= capacity_depth:
            organized_items.append(item)  # Add the item to the organized list
            used_width += item.width  # Update the used width
            current_row_height = max(current_row_height, item.height)  # Update the row height based on the tallest item
            current_depth_height = max(current_depth_height, item.depth)  # Update depth height based on the deepest item
        elif used_height + current_row_height + item.height <= capacity_height:
            # If the item doesn't fit, move to the next layer by adjusting height and reset row
            used_height += current_row_height  # Move to the next layer in height
            used_width = item.width  # Reset the width for the new row
            used_depth += current_depth_height  # Move forward in depth after filling the current row
            current_row_height = item.height  # Set the row height to the new item
            current_depth_height = item.depth  # Set the depth height to the new item
            organized_items.append(item)  # Add the item to the organized list
        else:
            # If the item doesn't fit in the bin, print a message
            print(f"Cannot fit item {item.name} ({item.width}m x {item.height}m x {item.depth}m) in the capacity.")

    return organized_items  # Return the list of organized items

# Function to plot a 3D cuboid (item) within the bin
def plot_cube(ax, x, y, z, dx, dy, dz, color='blue'):
    """Plots a 3D cuboid at position (x, y, z) with size (dx, dy, dz)."""
    # Define the vertices of the cuboid
    vertices = [
        [x, y, z], [x + dx, y, z], [x + dx, y + dy, z], [x, y + dy, z],  # Bottom face
        [x, y, z + dz], [x + dx, y, z + dz], [x + dx, y + dy, z + dz], [x, y + dy, z + dz]  # Top face
    ]

    # Define the faces of the cuboid using the vertices
    faces = [
        [vertices[0], vertices[1], vertices[2], vertices[3]],  # Bottom
        [vertices[4], vertices[5], vertices[6], vertices[7]],  # Top
        [vertices[0], vertices[1], vertices[5], vertices[4]],  # Front
        [vertices[2], vertices[3], vertices[7], vertices[6]],  # Back
        [vertices[0], vertices[3], vertices[7], vertices[4]],  # Left
        [vertices[1], vertices[2], vertices[6], vertices[5]]  # Right
    ]

    # Add the cuboid (represented by faces) to the 3D plot
    ax.add_collection3d(Poly3DCollection(faces, facecolors=color, linewidths=1, edgecolors='r', alpha=.25))

# Function to visualize the organized items in 3D
def visualize_3d(capacity_width, capacity_height, capacity_depth, organized_items):
    fig = plt.figure()  # Create a new figure for 3D plotting
    ax = fig.add_subplot(111, projection='3d')  # Add a 3D subplot

    # Adjust aspect ratio to match the bin's real dimensions
    ax.set_box_aspect([capacity_width, capacity_height, capacity_depth])

    # Set limits for each axis based on the bin dimensions
    ax.set_xlim([0, capacity_width])
    ax.set_ylim([0, capacity_height])
    ax.set_zlim([0, capacity_depth])

    # Draw the bin as a green cuboid
    plot_cube(ax, 0, 0, 0, capacity_width, capacity_height, capacity_depth, color='green')

    used_width = 0  # Track the used width while placing items
    used_height = 0  # Track the used height while placing items
    used_depth = 0  # Track the used depth while placing items
    current_row_height = 0  # Track the row height
    current_depth_height = 0  # Track the depth height

    colors = ['blue', 'orange', 'red', 'purple']  # Colors to distinguish different items

    # Loop over the organized items to visualize them in 3D
    for i, item in enumerate(organized_items):
        # Plot the item as a cuboid in the bin
        plot_cube(ax, used_width, used_height, used_depth, item.width, item.height, item.depth,
                  color=colors[i % len(colors)])  # Alternate colors

        # Update the used width after placing the item
        used_width += item.width
        current_row_height = max(current_row_height, item.height)  # Update row height
        current_depth_height = max(current_depth_height, item.depth)  # Update depth height

        # Move to next row or depth if necessary
        if used_width >= capacity_width:
            used_height += current_row_height  # Move to the next layer in height
            used_width = 0  # Reset width for new row
            used_depth += current_depth_height  # Move in depth after the row is filled
            current_row_height = 0  # Reset row height
            current_depth_height = 0  # Reset depth height

    # Set the title and labels for the 3D plot
    ax.set_title("3D Item Packing Visualization")
    ax.set_xlabel("Width (m)")
    ax.set_ylabel("Height (m)")
    ax.set_zlabel("Depth (m)")

    # Show the plot
    plt.show()


# Collect bin dimensions from user
capacity_width = float(input("Enter the bin's width in meters: "))
capacity_height = float(input("Enter the bin's height in meters: "))
capacity_depth = float(input("Enter the bin's depth in meters: "))

# Collect item information from the user
items = []
while True:
    name = input("Enter item name (or 'done' to stop): ")
    if name.lower() == 'done':
        break
    width = float(input(f"Enter the width of {name} in meters: "))
    height = float(input(f"Enter the height of {name} in meters: "))
    depth = float(input(f"Enter the depth of {name} in meters: "))
    weight = float(input(f"Enter the weight of {name} in kg: "))
    items.append(Item(name, width, height, depth, weight))

# Organize the items within the bin
organized_items = organize_items(capacity_width, capacity_height, capacity_depth, items)

# Visualize the organized items in 3D
visualize_3d(capacity_width, capacity_height, capacity_depth, organized_items)
