import * as THREE from 'three';
import { PointerLockControls } from 'three-stdlib';
console.log(THREE);

// Create a new scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
    75, // Field of view in degrees
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // near the camera
    1000 // far from the camera
);
scene.add(camera);
camera.position.z = 5; // Move the camera back 5 units

// Create a renderer
const renderer = new THREE.WebGLRenderer({ antialias: true }); // For smooth edges
renderer.setSize(window.innerWidth, window.innerHeight); // Set the size of the renderer
renderer.setClearColor(0xffffff, 1); // Background color of the renderer
document.body.appendChild(renderer.domElement); // Add the renderer to the HTML document

// Create Light
// Ambient Light
const ambientLight = new THREE.AmbientLight(0x101010, 1.0); // Color, intensity
scene.add(ambientLight);

// Directional Light
const sunLight = new THREE.DirectionalLight(0xdddddd, 1.0); // Color, intensity
sunLight.position.set(0, 15, 0); // Position of the light
scene.add(sunLight);

// Create a cube
const geometry = new THREE.BoxGeometry(1, 1, 1); // Box geometry
const material = new THREE.MeshBasicMaterial({ color: 'blue' }); // Material
const cube = new THREE.Mesh(geometry, material); // Mesh
scene.add(cube); // Add the mesh to the scene

// Event listeners for when we press the keys
document.addEventListener('keydown', onKeyDown, false);

// Texture of the floor
const textureLoader = new THREE.TextureLoader();
const floorTexture = textureLoader.load('img/Floor.jpg'); // Load the texture

// Create the floor plane
const planeGeometry = new THREE.PlaneGeometry(50, 50); // Plane geometry
const planeMaterial = new THREE.MeshBasicMaterial({
    map: floorTexture,
    side: THREE.DoubleSide,
}); // Material creation

const floorPlane = new THREE.Mesh(planeGeometry, planeMaterial); // Floor mesh creation
floorPlane.rotation.x = Math.PI / 2; // Rotate the plane 90 degrees
floorPlane.position.y = -Math.PI; // Move the plane down
scene.add(floorPlane); // Add the mesh to the scene

// Create the walls
const wallGroup = new THREE.Group(); // Create a group to hold the walls
scene.add(wallGroup); // Add the group to the scene

// Front wall
const frontWall = new THREE.Mesh(
    new THREE.BoxGeometry(50, 20, 0.001),
    new THREE.MeshBasicMaterial({ color: 'green' })
); // Front wall mesh creation
frontWall.position.z = -20;
wallGroup.add(frontWall);

// Left wall
const leftWall = new THREE.Mesh(
    new THREE.BoxGeometry(50, 20, 0.001),
    new THREE.MeshBasicMaterial({ color: 'red' })
); // Left wall mesh creation
leftWall.rotation.y = Math.PI / 2; // Rotate the wall 90 degrees
leftWall.position.x = -20; // Move the wall to the left
wallGroup.add(leftWall);

// Right wall
const rightWall = new THREE.Mesh(
    new THREE.BoxGeometry(50, 20, 0.001),
    new THREE.MeshBasicMaterial({ color: 'yellow' })
); // Right wall mesh creation
rightWall.rotation.y = Math.PI / 2; // Rotate the wall 90 degrees
rightWall.position.x = 20; // Move the wall to the right
wallGroup.add(rightWall);

// Loop through each wall and create the bounding box
for (let i = 0; i < wallGroup.children.length; i++) {
    wallGroup.children[i].BBox = new THREE.Box3();
    wallGroup.children[i].BBox.setFromObject(wallGroup.children[i]);
}

// Create the ceiling
const ceilingGeometry = new THREE.PlaneGeometry(50, 50); // Ceiling geometry creation
const ceilingMaterial = new THREE.MeshBasicMaterial({
    color: 'blue',
    side: THREE.DoubleSide,
}); // Ceiling material creation

const ceilingPlane = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
ceilingPlane.rotation.x = Math.PI / 2; // Rotate the plane 90 degrees
ceilingPlane.position.y = 12; // Move the plane up
scene.add(ceilingPlane); // Add the ceiling to the scene

// Handle keydown events
function onKeyDown(event) {
    let keycode = event.which;
    if (keycode == 37) {
        camera.translateX(-0.05);
    } else if (keycode == 39) {
        camera.translateX(0.05);
    } else if (keycode == 40) {
        camera.translateY(-0.05);
    } else if (keycode == 38) {
        camera.translateY(0.05);
    }
}

// Render loop
let render = function () {
    cube.rotation.x += 0.01; // Rotate the cube
    cube.rotation.y += 0.01; // Rotate the cube
    renderer.render(scene, camera); // Render the scene
    requestAnimationFrame(render);
};

render(); // Call the render function

// Initial render
renderer.render(scene, camera);