import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

// 3D Cyber Butterfly with Flapping Wings & Mouse Tracking
function CyberButterfly({ mouse }) {
  const groupRef = useRef();
  const leftWingRef = useRef();
  const rightWingRef = useRef();

  // Create Wing Shape
  const wingShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.8, 1.2, 2.2, 1.5, 2.0, 0.4);
    shape.bezierCurveTo(1.8, -0.4, 1.2, -1.2, 0.4, -1.0);
    shape.bezierCurveTo(0.1, -0.6, 0, -0.2, 0, 0);
    return shape;
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // 1. High-speed wing flapping animation
    const flapAngle = Math.sin(time * 14) * 0.65;
    if (leftWingRef.current && rightWingRef.current) {
      leftWingRef.current.rotation.y = flapAngle;
      rightWingRef.current.rotation.y = -flapAngle;
    }

    // 2. Smooth gliding & mouse / scroll tracking
    if (groupRef.current) {
      const targetX = mouse.current.x * 4.5;
      const targetY = mouse.current.y * 3 + Math.sin(time * 2) * 0.4;
      
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
      
      // Slight pitch & roll rotation based on movement
      groupRef.current.rotation.z = Math.sin(time * 3) * 0.15;
      groupRef.current.rotation.x = Math.cos(time * 2) * 0.1;
    }
  });

  const wingExtrudeSettings = { depth: 0.02, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.02, bevelThickness: 0.02 };

  return (
    <group ref={groupRef} position={[0, 0, 1]} scale={[0.8, 0.8, 0.8]}>
      {/* Butterfly Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.04, 1.4, 16]} />
        <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={1} />
      </mesh>

      {/* Left Wing */}
      <group ref={leftWingRef} position={[-0.05, 0, 0]}>
        <mesh rotation={[0, 0, 0]}>
          <extrudeGeometry args={[wingShape, wingExtrudeSettings]} />
          <meshStandardMaterial
            color="#00E5FF"
            emissive="#E91E63"
            emissiveIntensity={0.8}
            side={THREE.DoubleSide}
            roughness={0.1}
            metalness={0.8}
            wireframe={true}
          />
        </mesh>
      </group>

      {/* Right Wing */}
      <group ref={rightWingRef} position={[0.05, 0, 0]} scale={[-1, 1, 1]}>
        <mesh rotation={[0, 0, 0]}>
          <extrudeGeometry args={[wingShape, wingExtrudeSettings]} />
          <meshStandardMaterial
            color="#00E5FF"
            emissive="#E91E63"
            emissiveIntensity={0.8}
            side={THREE.DoubleSide}
            roughness={0.1}
            metalness={0.8}
            wireframe={true}
          />
        </mesh>
      </group>

      {/* Glowing Antennae */}
      <mesh position={[-0.15, 0.8, 0]} rotation={[0, 0, -0.4]}>
        <cylinderGeometry args={[0.015, 0.015, 0.6, 8]} />
        <meshStandardMaterial color="#E91E63" emissive="#E91E63" emissiveIntensity={1} />
      </mesh>
      <mesh position={[0.15, 0.8, 0]} rotation={[0, 0, 0.4]}>
        <cylinderGeometry args={[0.015, 0.015, 0.6, 8]} />
        <meshStandardMaterial color="#E91E63" emissive="#E91E63" emissiveIntensity={1} />
      </mesh>
    </group>
  );
}

// Sparkling Butterfly Dust Particles
function ButterflyDust() {
  const count = 180;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  const particlesRef = useRef();

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.03;
      particlesRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        color="#00E5FF"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
}

export default function ThreeCanvas({ mouse }) {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00E5FF" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#E91E63" />
        
        {/* 3D Flapping Butterfly */}
        <CyberButterfly mouse={mouse} />
        
        {/* Sparkling Dust Trail */}
        <ButterflyDust />

        {/* Ambient Starfield */}
        <Stars
          radius={50}
          depth={50}
          count={2000}
          factor={4}
          saturation={0.8}
          fade
          speed={1.5}
        />
      </Canvas>
    </div>
  );
}
