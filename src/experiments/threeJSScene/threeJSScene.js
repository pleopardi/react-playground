import {
  AmbientLight,
  AxesHelper,
  Box3,
  Color,
  DoubleSide,
  MeshLambertMaterial,
  ObjectLoader,
  PerspectiveCamera,
  Scene,
  TextureLoader,
  WebGLRenderer
} from "three";
import { OrbitControls } from "./controls/OrbitControls";

export default function threeJSScene(element) {
  let scaleFactor;
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
      scene.background = new Color(0xffffff);
      const camera = new PerspectiveCamera(90, width / height, 0.1, 1000);

      scene.add(new AxesHelper(100));

      camera.position.z = 200;

      const renderer = new WebGLRenderer();
      renderer.setSize(width, height);
      element.appendChild(renderer.domElement);

      const material = new MeshLambertMaterial({
        map: new TextureLoader().load(
          "http://localhost:3000/assets/threejs/wall.jpg"
        ),
        side: DoubleSide
      });

      const loader = new ObjectLoader();

      loader.load(
        // resource URL
        "http://localhost:3000/assets/threejs/box.json",

        // onLoad callback
        // Here the loaded data is assumed to be an object
        function(object) {
          model = object;
          const boundingBox = new Box3().setFromObject(object);
          const maxSize = Math.max(...Object.values(boundingBox.getSize()));

          scaleFactor = 1 / maxSize;

          object.scale.set(1, 1, 1);
          object.rotation.set(0, -Math.PI / 3, 0);
          object.position.set(0, 0, 0);
          object.material = material;
          scene.add(object);
        }
      );

      new OrbitControls(camera, renderer.domElement);

      scene.add(new AmbientLight(0xffffff, 2));

      function animate() {
        requestAnimationFrame(animate);

        renderer.render(scene, camera);
      }

      animate();
    },
    setDimensions({ x = currentXSize, y = currentYSize, z = currentZSize }) {
      currentXSize = x;
      currentYSize = y;
      currentZSize = z;

      model.scale.set(
        currentXSize * scaleFactor,
        currentYSize * scaleFactor,
        currentZSize * scaleFactor
      );
    }
  };
}
