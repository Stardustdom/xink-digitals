"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

const SHELL_R = 1.6;
const HOLES = [
  { dir: new THREE.Vector3(0.5, 0.35, 0.8).normalize(), c: 0.42 },
  { dir: new THREE.Vector3(-0.75, -0.3, -0.5).normalize(), c: 0.45 },
];

/** Frosted shell with openings, liquid lime core, chrome rims and rings. */
export default function Orb3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTex = pmrem.fromScene(new RoomEnvironment(), 0.03).texture;
    scene.environment = envTex;

    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
    camera.position.set(0, 0, 11);

    const group = new THREE.Group();
    group.scale.set(1.15, 1, 1);
    scene.add(group);

    // --- Single liquid lime core blob ---
    const BLOBS = [
      { color: 0xc9f36d, r: 1.28, p: [0.08, 0.05, 0.05] },
    ].map((d, i) => {
      const geo = new THREE.IcosahedronGeometry(d.r, 36);
      const mesh = new THREE.Mesh(
        geo,
        new THREE.MeshPhysicalMaterial({
          color: d.color,
          roughness: 0.08,
          metalness: 0.12,
          clearcoat: 1.0,
          clearcoatRoughness: 0.04,
          envMapIntensity: 1.5,
        })
      );
      mesh.position.set(d.p[0], d.p[1], d.p[2]);
      group.add(mesh);
      return { geo, base: geo.attributes.position.array.slice() as Float32Array, r: d.r, seed: 0 };
    });

    // --- Frosted grey shell with cut-out holes ---
    const shellMat = new THREE.MeshPhysicalMaterial({
      color: 0x8f98a3,
      roughness: 0.6,
      metalness: 0.35,
      clearcoat: 0.25,
      envMapIntensity: 1.0,
      side: THREE.DoubleSide,
    });
    shellMat.onBeforeCompile = (shader) => {
      shader.uniforms.holeDirA = { value: HOLES[0].dir };
      shader.uniforms.holeDirB = { value: HOLES[1].dir };
      shader.uniforms.holeCA = { value: HOLES[0].c };
      shader.uniforms.holeCB = { value: HOLES[1].c };
      shader.vertexShader = shader.vertexShader
        .replace("void main() {", "varying vec3 vObjPos;\nvoid main() {")
        .replace("#include <begin_vertex>", "#include <begin_vertex>\nvObjPos = normalize(position);");
      shader.fragmentShader = shader.fragmentShader.replace(
        "void main() {",
        "varying vec3 vObjPos;\nuniform vec3 holeDirA;\nuniform vec3 holeDirB;\nuniform float holeCA;\nuniform float holeCB;\nvoid main() {\n  if (dot(vObjPos, holeDirA) > holeCA || dot(vObjPos, holeDirB) > holeCB) discard;"
      );
    };
    const shell = new THREE.Mesh(new THREE.SphereGeometry(SHELL_R, 96, 64), shellMat);
    group.add(shell);

    // --- Chrome rims around each opening ---
    const chrome = new THREE.MeshPhysicalMaterial({
      color: 0xd5d9de,
      metalness: 1,
      roughness: 0.18,
      clearcoat: 0.5,
      envMapIntensity: 1.5,
    });
    const z = new THREE.Vector3(0, 0, 1);
    HOLES.forEach(({ dir, c }) => {
      const radius = SHELL_R * Math.sqrt(1 - c * c);
      const rim = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.16, 40, 160), chrome);
      rim.position.copy(dir).multiplyScalar(SHELL_R * c);
      rim.quaternion.setFromUnitVectors(z, dir);
      group.add(rim);
    });

    // --- Swooping chrome band across the front ---
    const band = new THREE.Mesh(new THREE.TorusGeometry(1.62, 0.3, 48, 200), chrome);
    band.scale.set(1, 1, 0.55);
    band.rotation.set(0.95, -0.35, 0.5);
    group.add(band);

    // --- Thin orbiting rings ---
    const mkRing = (r: number, tube: number, mat: THREE.Material, rot: [number, number, number]) => {
      const m = new THREE.Mesh(new THREE.TorusGeometry(r, tube, 24, 240), mat);
      m.rotation.set(...rot);
      group.add(m);
      return m;
    };
    const silverMat = new THREE.MeshStandardMaterial({ color: 0xe3e6ea, metalness: 1, roughness: 0.16 });
    const limeMat = new THREE.MeshStandardMaterial({
      color: 0xc9f36d,
      emissive: 0x88b81f,
      emissiveIntensity: 0.35,
      roughness: 0.3,
    });
    const r1 = mkRing(2.2, 0.024, silverMat, [1.15, 0.2, -0.35]);
    const r2 = mkRing(2.4, 0.02, silverMat, [1.0, -0.3, 0.5]);
    const r3 = mkRing(2.3, 0.022, limeMat, [1.3, 0.1, 0.15]);

    const key = new THREE.DirectionalLight(0xffffff, 0.9);
    key.position.set(3, 4, 5);
    scene.add(key);

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = mount;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    const target = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 0.6;
      target.y = (e.clientY / window.innerHeight - 0.5) * 0.4;
    };
    window.addEventListener("pointermove", onMove);

    const v = new THREE.Vector3();
    const displace = (t: number) => {
      for (const blob of BLOBS) {
        const pos = blob.geo.attributes.position;
        const k = 1 / blob.r;
        const tt = t + blob.seed;
        for (let i = 0; i < pos.count; i++) {
          v.set(blob.base[i * 3], blob.base[i * 3 + 1], blob.base[i * 3 + 2]).multiplyScalar(k);
          const n =
            Math.sin(v.x * 2.4 + tt * 0.7) * 0.12 +
            Math.sin(v.y * 2.8 - tt * 0.6) * 0.10 +
            Math.sin(v.z * 2.6 + tt * 0.5) * 0.10 +
            Math.sin((v.x + v.z) * 4.5 + tt * 0.8) * 0.04;
          v.normalize().multiplyScalar(blob.r * (1 + n));
          pos.setXYZ(i, v.x, v.y, v.z);
        }
        pos.needsUpdate = true;
        blob.geo.computeVertexNormals();
      }
    };
    displace(0);

    let raf = 0;
    let tick = 0;
    const clock = new THREE.Clock();
    const frame = () => {
      const t = clock.getElapsedTime();
      if (!reduceMotion) {
        if (tick++ % 3 === 0) displace(t);
        group.rotation.y += (target.x + t * 0.1 - group.rotation.y) * 0.04;
        group.rotation.x += (target.y + Math.sin(t * 0.3) * 0.1 - group.rotation.x) * 0.04;
        r1.rotation.z = -0.35 + t * 0.1;
        r2.rotation.z = 0.5 - t * 0.08;
        r3.rotation.z = 0.15 + t * 0.14;
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    };
    frame();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      scene.traverse((o) => {
        if (o instanceof THREE.Mesh) {
          o.geometry.dispose();
          (o.material as THREE.Material).dispose();
        }
      });
      envTex.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" aria-hidden="true" />;
}
