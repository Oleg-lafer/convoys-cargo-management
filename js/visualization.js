class TruckVisualizer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xf0f0f0);
        
        this.camera = new THREE.PerspectiveCamera(
            45,
            this.container.clientWidth / this.container.clientHeight,
            0.1,
            1000
        );
        
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.shadowMap.enabled = true;
        this.container.appendChild(this.renderer.domElement);
        
        this.camera.position.set(10, 8, 10);
        this.camera.lookAt(0, 0, 0);
        
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 10, 5);
        directionalLight.castShadow = true;
        this.scene.add(directionalLight);

        const gridHelper = new THREE.GridHelper(20, 20);
        this.scene.add(gridHelper);
        
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.screenSpacePanning = false;
        this.controls.minDistance = 5;
        this.controls.maxDistance = 30;
        
        this.animate();
    }
    
    createTruck(width, height, depth) {
        const geometry = new THREE.BoxGeometry(width, height, depth);
        const edges = new THREE.EdgesGeometry(geometry);
        const line = new THREE.LineSegments(
            edges,
            new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 })
        );
        
        const material = new THREE.MeshPhongMaterial({
            color: 0x808080,
            transparent: true,
            opacity: 0.1,
            side: THREE.DoubleSide
        });
        const truck = new THREE.Mesh(geometry, material);
        
        const truckGroup = new THREE.Group();
        truckGroup.add(line);
        truckGroup.add(truck);
        
        truckGroup.position.set(width/2, height/2, depth/2);
        this.scene.add(truckGroup);
    }
    
    addItem(item) {
        const geometry = new THREE.BoxGeometry(item.width, item.height, item.depth);
        const colorHex = this.getColorHex(item.color);
        
        const material = new THREE.MeshBasicMaterial({
            color: colorHex,
            opacity: 0.8,
            transparent: true
        });
        
        const box = new THREE.Mesh(geometry, material);
        
        const edges = new THREE.EdgesGeometry(geometry);
        const line = new THREE.LineSegments(
            edges,
            new THREE.LineBasicMaterial({ color: 0x000000 })
        );
        
        const boxGroup = new THREE.Group();
        boxGroup.add(box);
        boxGroup.add(line);
        
        boxGroup.position.set(
            item.x + item.width/2,
            item.z + item.height/2,
            item.y + item.depth/2
        );
        
        this.scene.add(boxGroup);
    }
    
    getColorHex(colorName) {
        const colorMap = {
            'red': 0xff0000,
            'blue': 0x0000ff,
            'orange': 0xffa500,
            'purple': 0x800080,
            'yellow': 0xffff00,
            'cyan': 0x00ffff,
            'magenta': 0xff00ff,
            'brown': 0x8b4513
        };
        console.log('Setting color:', colorName, 'Hex:', colorMap[colorName.toLowerCase()]);
        return colorMap[colorName.toLowerCase()] || 0x808080;
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
    
    clear() {
        while(this.scene.children.length > 0) { 
            this.scene.remove(this.scene.children[0]); 
        }
        const gridHelper = new THREE.GridHelper(20, 20);
        this.scene.add(gridHelper);
    }
}
