import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleField({ count = 1400 }) {
  const points = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    return arr
  }, [count])

  const colors = useMemo(() => {
    const palette = [
      new THREE.Color('#8b5cf6'),
      new THREE.Color('#22d3ee'),
      new THREE.Color('#e879f9'),
    ]
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const c = palette[Math.floor(Math.random() * palette.length)]
      arr[i * 3] = c.r
      arr[i * 3 + 1] = c.g
      arr[i * 3 + 2] = c.b
    }
    return arr
  }, [count])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (points.current) {
      points.current.rotation.y = t * 0.02
      points.current.rotation.x = Math.sin(t * 0.05) * 0.05

      const targetX = (state.mouse.x * 0.6)
      const targetY = (state.mouse.y * 0.4)
      points.current.rotation.y += (targetX - points.current.rotation.y) * 0.0
      points.current.position.x += (targetX - points.current.position.x) * 0.02
      points.current.position.y += (targetY - points.current.position.y) * 0.02
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function GlowSphere({ position, color, scale = 1, speed = 0.4 }) {
  const mesh = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(t * speed) * 0.6
      mesh.current.rotation.y = t * 0.1
    }
  })
  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 2]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.12} />
    </mesh>
  )
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        <ParticleField />
        <GlowSphere position={[-3.5, 1.5, -3]} color="#8b5cf6" scale={1.4} speed={0.3} />
        <GlowSphere position={[3.5, -1, -4]} color="#22d3ee" scale={1.8} speed={0.45} />
        <GlowSphere position={[0, -2, -6]} color="#e879f9" scale={1.1} speed={0.35} />
      </Canvas>
    </div>
  )
}
