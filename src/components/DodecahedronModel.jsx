import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

// New ThreeDModel Component
const ThreeDModel = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer, mesh;
    const orbitGroups = []; // Array to hold multiple orbit groups
    const currentCanvas = canvasRef.current;

    const updateRendererSize = () => {
      if (currentCanvas && camera && renderer) {
        // Get the smaller of the two dimensions to maintain a square
        const size = Math.min(window.innerWidth, window.innerHeight);
        renderer.setSize(size, size);
        camera.aspect = 1; // Set aspect ratio to 1 for a square
        camera.updateProjectionMatrix();
      }
    };

    if (currentCanvas) {
      scene = new THREE.Scene();
      // Initialize camera with aspect ratio of 1
      camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ canvas: currentCanvas, antialias: true, alpha: true });
      renderer.setClearColor(0x000000, 0);

      updateRendererSize();
      window.addEventListener('resize', updateRendererSize);

      const geometry = new THREE.DodecahedronGeometry(2, 0);
      const material = new THREE.MeshPhongMaterial({
        color: 0xccaaff,
        emissive: 0x000000,
        specular: 0x6600cc,
        shininess: 30,
        flatShading: true,
        transparent: true,
        opacity: 0.8
      });
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight1.position.set(5, 5, 5);
      scene.add(directionalLight1);

      const directionalLight2 = new THREE.DirectionalLight(0x00aaff, 0.5);
      directionalLight2.position.set(-5, -5, -5);
      scene.add(directionalLight2);

      // --- Change made here ---
      // Initial camera position is set to a higher z value (15) to start zoomed out.
      camera.position.z = 15;

      // Define parameters for the three orbits
      const orbitConfigs = [
        { numFormulas: 50, orbitRadius: 3.5, orbitSpeed: 0.01, color: 0x666B8B, rotationX: 0.002 },
        { numFormulas: 40, orbitRadius: 4.5, orbitSpeed: 0.008, color: 0x336B8B, rotationX: -0.003 },
        { numFormulas: 50, orbitRadius: 5.5, orbitSpeed: 0.006, color: 0x006B8B, rotationX: 0.004 }
      ];

      orbitConfigs.forEach((config, index) => {
        const formulaGroup = new THREE.Group();
        scene.add(formulaGroup);
        orbitGroups.push({ group: formulaGroup, speed: config.orbitSpeed, rotationX: config.rotationX });

        const formulaMaterial = new THREE.LineBasicMaterial({ color: config.color, linewidth: 20 });
        const formulaLength = 0.8;

        for (let i = 0; i < config.numFormulas; i++) {
          const points = [];
          points.push(new THREE.Vector3(0, 0, 0));
          points.push(new THREE.Vector3(formulaLength, 0, 0));

          const formulaGeometry = new THREE.BufferGeometry().setFromPoints(points);
          const formulaLine = new THREE.Line(formulaGeometry, formulaMaterial);

          const angle = (i / config.numFormulas) * Math.PI * 2;
          formulaLine.position.set(
            Math.cos(angle) * config.orbitRadius,
            Math.sin(angle) * config.orbitRadius * (index === 1 ? 0.7 : 0.5), 
            Math.sin(angle) * config.orbitRadius
          );
          formulaLine.rotation.y = angle;
          formulaLine.rotation.z = Math.random() * Math.PI;

          formulaGroup.add(formulaLine);
        }
      });

      const animate = () => {
        requestAnimationFrame(animate);
        if (mesh) {
            mesh.rotation.x += 0.005;
            mesh.rotation.y += 0.005;
        }

        // Animate each orbit group
        orbitGroups.forEach(orbit => {
            orbit.group.rotation.y += orbit.speed;
            orbit.group.rotation.x += orbit.rotationX;
        });

        renderer.render(scene, camera);
      };

      animate();

      gsap.fromTo(material,
        { opacity: 0 },
        {
          opacity: 0.8,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: currentCanvas,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // --- Change made here ---
      // The GSAP animation now moves the camera from z: 25 to z: 15.
      gsap.fromTo(camera.position,
        { z: 25 },
        {
          z: 15,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: currentCanvas,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    return () => {
      if (currentCanvas) {
        window.removeEventListener('resize', updateRendererSize);
      }
      if (renderer) renderer.dispose();
      if (scene) {
        scene.traverse((object) => {
          if (object.isMesh || object.isLine) {
            if (object.geometry) object.geometry.dispose();
            if (object.material) object.material.dispose();
          }
        });
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full"></canvas>;
};

export default ThreeDModel;