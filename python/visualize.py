import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d.art3d import Poly3DCollection

def draw_box(ax, x, y, z, w, h, d, color='skyblue', label=None):
    # Define vertices of the box
    vertices = [
        [x, y, z], [x+w, y, z], [x+w, y+h, z], [x, y+h, z],          # Bottom face
        [x, y, z+d], [x+w, y, z+d], [x+w, y+h, z+d], [x, y+h, z+d]   # Top face
    ]

    faces = [
        [vertices[0], vertices[1], vertices[2], vertices[3]],  # Bottom
        [vertices[4], vertices[5], vertices[6], vertices[7]],  # Top
        [vertices[0], vertices[1], vertices[5], vertices[4]],  # Front
        [vertices[2], vertices[3], vertices[7], vertices[6]],  # Back
        [vertices[1], vertices[2], vertices[6], vertices[5]],  # Right
        [vertices[0], vertices[3], vertices[7], vertices[4]],  # Left
    ]

    box = Poly3DCollection(faces, linewidths=0.5, edgecolors='black', alpha=0.8)
    box.set_facecolor(color)
    ax.add_collection3d(box)

    if label:
        ax.text(x + w/2, y + h/2, z + d/2, label, color='black', ha='center')

def visualize_truck(items, truck_dimensions):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')

    truck_w, truck_h, truck_d = truck_dimensions
    ax.set_xlim(0, truck_w)
    ax.set_ylim(0, truck_h)
    ax.set_zlim(0, truck_d)
    ax.set_box_aspect([truck_w, truck_h, truck_d])
    ax.set_xlabel('Width')
    ax.set_ylabel('Height')
    ax.set_zlabel('Depth')

    for item in items:
        x, y, z = item['position']
        draw_box(ax, x, y, z, item['width'], item['height'], item['depth'], label=item['name'])

    plt.title('Truck Packing Visualization')
    plt.show()
