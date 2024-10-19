import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d.art3d import Poly3DCollection


def plot_cube(ax, x, y, z, dx, dy, dz, color='blue'):
    """Plots a 3D cuboid at position (x, y, z) with size (dx, dy, dz)."""
    vertices = [
        [x, y, z], [x + dx, y, z], [x + dx, y + dy, z], [x, y + dy, z],  # Bottom face
        [x, y, z + dz], [x + dx, y, z + dz], [x + dx, y + dy, z + dz], [x, y + dy, z + dz]  # Top face
    ]

    faces = [
        [vertices[0], vertices[1], vertices[2], vertices[3]],  # Bottom
        [vertices[4], vertices[5], vertices[6], vertices[7]],  # Top
        [vertices[0], vertices[1], vertices[5], vertices[4]],  # Front
        [vertices[2], vertices[3], vertices[7], vertices[6]],  # Back
        [vertices[0], vertices[3], vertices[7], vertices[4]],  # Left
        [vertices[1], vertices[2], vertices[6], vertices[5]]  # Right
    ]

    ax.add_collection3d(Poly3DCollection(faces, facecolors=color, linewidths=1, edgecolors='r', alpha=.25))


def set_aspect_ratio(ax, width, height, depth):
    """Sets the aspect ratio of the 3D axes."""
    max_dim = max(width, height, depth)
    ax.set_box_aspect([width / max_dim, height / max_dim, depth / max_dim])  # Aspect ratio is 1:1:1


def visualize_3d(capacity_width, capacity_height, capacity_depth, organized_items):
    """Visualize the organized items in 3D."""
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')

    # Draw the bin as a green cuboid
    plot_cube(ax, 0, 0, 0, capacity_width, capacity_height, capacity_depth, color='green')

    used_width = 0
    used_height = 0
    used_depth = 0
    current_row_height = 0
    current_depth_height = 0

    colors = ['blue', 'orange', 'red', 'purple']

    for i, item in enumerate(organized_items):
        plot_cube(ax, used_width, used_height, used_depth, item.width, item.height, item.depth,
                  color=colors[i % len(colors)])
        used_width += item.width
        current_row_height = max(current_row_height, item.height)
        current_depth_height = max(current_depth_height, item.depth)

        if used_width >= capacity_width:
            used_height += current_row_height
            used_width = 0
            used_depth += current_depth_height
            current_row_height = 0
            current_depth_height = 0

    ax.set_title("3D Item Packing Visualization")
    ax.set_xlabel("Width (m)")
    ax.set_ylabel("Height (m)")
    ax.set_zlabel("Depth (m)")

    # Set aspect ratio
    set_aspect_ratio(ax, capacity_width, capacity_height, capacity_depth)

    plt.show()
