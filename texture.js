const earthTexture = new THREE.TextureLoader().load('textures/earth.jpg');
const earthMaterial = new THREE.MeshLambertMaterial({ map: earthTexture });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);