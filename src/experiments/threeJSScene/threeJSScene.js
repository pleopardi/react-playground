import {
  AmbientLight,
  AxesHelper,
  Box3,
  Color,
  DoubleSide,
  MeshBasicMaterial,
  MeshLambertMaterial,
  ObjectLoader,
  PerspectiveCamera,
  Scene,
  TextureLoader,
  WebGLRenderer
} from "three";
import { OrbitControls } from "./controls/OrbitControls";

function loadTexture(texture) {
  return new TextureLoader().load(texture);
}

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
        map: loadTexture("/assets/threejs/wall.jpg"),
        side: DoubleSide
      });

      const loader = new ObjectLoader();

      loader.load(
        // resource URL
        "/assets/threejs/box.json",

        // onLoad callback
        // Here the loaded data is assumed to be an object
        function(object) {
          model = object;
          const boundingBox = new Box3().setFromObject(model);
          const maxSize = Math.max(...Object.values(boundingBox.getSize()));

          scaleFactor = 1 / maxSize;

          model.scale.set(1, 1, 1);
          model.rotation.y = -Math.PI / 3;
          model.material = new MeshBasicMaterial({
            color: 0xa0a0a0
          });
          scene.add(model);

          setTimeout(() => {
            model.material = material;
          }, 1000);
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
    },
    setMaterial(texture) {
      model.material = new MeshLambertMaterial({
        map: loadTexture(texture),
        side: DoubleSide
      });
    }
  };
}
