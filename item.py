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
