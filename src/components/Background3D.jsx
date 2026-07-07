import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleField() {
  const meshRef = useRef();
  const count = 600;

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
      sz[i] = Math.random() * 2 + 0.5;
    }
    return [pos, sz];
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    meshRef.current.rotation.y = time * 0.015;
    meshRef.current.rotation.x = Math.sin(time * 0.02) * 0.05;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          array={sizes}
          count={count}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#00E5FF"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function AmbientOrb({ position, color, scale = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    meshRef.current.position.y = position[1] + Math.sin(time * 0.3) * 0.5;
    meshRef.current.position.x = position[0] + Math.cos(time * 0.2) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.04}
      />
    </mesh>
  );
}

export default function Background3D() {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 0,
      background: 'linear-gradient(180deg, #020203 0%, #030712 30%, #050510 70%, #020203 100%)'
    }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <ParticleField />
        <AmbientOrb position={[-4, 2, -5]} color="#00E5FF" scale={3} />
        <AmbientOrb position={[5, -2, -6]} color="#D500F9" scale={4} />
        <AmbientOrb position={[0, 0, -8]} color="#1E1B4B" scale={5} />
      </Canvas>

      {/* CSS gradient overlay for depth */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40vh',
        background: 'linear-gradient(to top, #020203, transparent)',
        pointerEvents: 'none'
      }} />
    </div>
  );
}
