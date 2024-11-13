class Item {
    constructor(name, width, height, depth, weight) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.weight = weight;
        this.volume = width * height * depth;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.color = null;
    }
}