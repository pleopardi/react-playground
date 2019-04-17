import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from "three";

export default function threeJSScene(element) {
  const initialXSize = 80;
  const initialYSize = 80;
  const initialZSize = 80;

  let currentXSize = initialXSize;
  let currentYSize = initialYSize;
  let currentZSize = initialZSize;

  let model;
  let scene;

  return {
    init() {
      const { height, width } = element.getBoundingClientRect();

      scene = new Scene();
      const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);

      const renderer = new WebGLRenderer();
      renderer.setSize(width, height);
      element.appendChild(renderer.domElement);

      const geometry = new BoxGeometry(1, 1, 1);
      const material = new MeshBasicMaterial({ color: 0x00ff00 });

      model = new Mesh(geometry, material);

      scene.add(model);

      camera.position.z = 5;

      function animate() {
        requestAnimationFrame(animate);

        model.rotation.x += 0.01;
        model.rotation.y += 0.01;

        renderer.render(scene, camera);
      }

      animate();
    },
    setDimensions(
      newXSize = currentXSize,
      newYSize = currentYSize,
      newZSize = currentZSize
    ) {
      currentXSize = newXSize;
      currentYSize = newYSize;
      currentZSize = newZSize;

      model.scale.set(
        currentXSize / initialXSize,
        currentYSize / initialYSize,
        currentZSize / initialZSize
      );
    }
  };
}
