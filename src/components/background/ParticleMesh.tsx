"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// --- LAYER DEFINITIONS ---
// Layer 1: Small distant stars (Slowest, subtle interaction)
// Layer 2: Medium particles (Moderate interaction/magnetic pull)
// Layer 3: Large blur orbs (Foreground, highest parallax shift)

function ParticleLayer({ count, size, color, depth, parallaxFactor, magneticFactor }: any) {
  const meshRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  
  // Track eased mouse positions purely via refs for 60fps performance without React re-renders
  const targetX = useRef(0);
  const targetY = useRef(0);

  // Generate initial particle positions
  const { positions, originalPositions } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Spread X/Y widely, Z based on depth parameter
      const x = (Math.random() - 0.5) * 50; 
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * depth.spread + depth.start;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
    }
    return { positions, originalPositions };
  }, [count, depth]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Smooth inertia for mouse tracking
    // mouse.x/y is normalized from -1 to 1 by useThree automatically
    targetX.current += (mouse.x - targetX.current) * 0.05;
    targetY.current += (mouse.y - targetY.current) * 0.05;

    // 1. Overall Layer Parallax (moves the entire Points group based on depth)
    meshRef.current.position.x = targetX.current * parallaxFactor;
    meshRef.current.position.y = targetY.current * parallaxFactor;

    // 2. Continual slow ambient drifting rotation
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.02 * parallaxFactor;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.01 * parallaxFactor;

    // 3. Magnetic Pull (only if layer supports it and geometry exists)
    if (magneticFactor > 0) {
      const positionsArray = meshRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        const origX = originalPositions[idx];
        const origY = originalPositions[idx + 1];

        // Translate normalized mouse to world roughly (-10 to 10 range depending on camera)
        const worldMouseX = mouse.x * 12; 
        const worldMouseY = mouse.y * 12; 

        // Vector from particle to mouse
        const dx = worldMouseX - positionsArray[idx];
        const dy = worldMouseY - positionsArray[idx + 1];
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If within magnetic radius (e.g., 5 units), pull slightly
        const pullRadius = 5;
        if (distance < pullRadius) {
           const pullStrength = (pullRadius - distance) / pullRadius; // 1 at center, 0 at edge
           
           // Ease towards cursor
           positionsArray[idx] += dx * pullStrength * magneticFactor * delta;
           positionsArray[idx + 1] += dy * pullStrength * magneticFactor * delta;
        } else {
           // Spring back to original position
           positionsArray[idx] += (origX - positionsArray[idx]) * 0.02;
           positionsArray[idx + 1] += (origY - positionsArray[idx + 1]) * 0.02;
        }
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// --- CURSOR GLOW TRAIL LAYER (HTML Overlay) ---
function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smooth HTML DOM updates
      requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[-5] transition-opacity duration-300"
      style={{
        background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.08), transparent 40%)`
      }}
    />
  );
}

export default function ParticleMesh() {
  return (
    <div className="fixed inset-0 min-h-screen z-[-10] bg-black overflow-hidden">
      
      {/* 1. Deep Space Gradient & Dynamic Cursor Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-[#000000] to-[#000000]"></div>
      <CursorGlow />
      
      {/* 2. Fiber Canvas for interactive 3D particles */}
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
        dpr={[1, 2]} // Optimize pixel ratio
      >
        <fog attach="fog" args={["#000000", 15, 30]} />
        
        {/* Layer 1: Distant Stars (thousands, very small, slow parallax, no magnetic pull to save compute) */}
        <ParticleLayer 
            count={2000} 
            size={0.03} 
            color="#ffffff" 
            depth={{ start: -25, spread: 20 }} 
            parallaxFactor={1} 
            magneticFactor={0} 
        />
        
        {/* Layer 2: Medium Dust (fewer, slightly larger, mid-parallax, subtle magnetic pull) */}
        <ParticleLayer 
            count={500} 
            size={0.06} 
            color="#8B5CF6" 
            depth={{ start: -10, spread: 10 }} 
            parallaxFactor={2.5} 
            magneticFactor={0.1} 
        />
        
        {/* Layer 3: Foreground Orbs (very few, large, fast parallax, high magnetic pull) */}
        <ParticleLayer 
            count={50} 
            size={0.2} 
            color="#C084FC" 
            depth={{ start: 0, spread: 5 }} 
            parallaxFactor={4} 
            magneticFactor={0.5} 
        />
      </Canvas>
      
      {/* 3. Static Overlays (Noise & Darken) */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
      <div className="absolute inset-0  opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
      
    </div>
  );
}
