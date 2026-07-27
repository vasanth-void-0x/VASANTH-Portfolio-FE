import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/* Procedural star-field point cloud */
function Starfield() {
  const ref = useRef()
  const count = 2200
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 40 + Math.random() * 60
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi) - 20
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.006
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.14} color="#cdd6ff" sizeAttenuation transparent opacity={0.85} />
    </points>
  )
}

/* Slow-drifting dust / particle motes closer to camera, for parallax depth */
function GalaxyDust({ mouse }) {
  const ref = useRef()
  const count = 500
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 50
      arr[i * 3 + 1] = (Math.random() - 0.5) * 30
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5
    }
    return arr
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.z = state.clock.elapsedTime * 0.01
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, mouse.current.x * 1.4, 0.02)
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, mouse.current.y * 1.4, 0.02)
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#7c5cff" sizeAttenuation transparent opacity={0.5} />
    </points>
  )
}

function Planet({ mouse }) {
  const group = useRef()
  const mesh = useRef()

  useFrame((state) => {
    if (mesh.current) mesh.current.rotation.y = state.clock.elapsedTime * 0.04
    if (group.current) {
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, mouse.current.x * 1.2, 0.03)
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, mouse.current.y * 0.8, 0.03)
    }
  })

  return (
    <group ref={group} position={[10, -4, -18]}>
      <mesh ref={mesh}>
        <sphereGeometry args={[6, 64, 64]} />
        <meshStandardMaterial color="#3b1e78" emissive="#5b21b6" emissiveIntensity={0.35} roughness={0.85} metalness={0.15} />
      </mesh>
      {/* atmosphere glow shell */}
      <mesh scale={1.08}>
        <sphereGeometry args={[6, 64, 64]} />
        <meshBasicMaterial color="#7c5cff" transparent opacity={0.12} side={THREE.BackSide} />
      </mesh>
      {/* ring */}
      <mesh rotation={[Math.PI / 2.4, 0.2, 0]}>
        <ringGeometry args={[8.2, 9.4, 80]} />
        <meshBasicMaterial color="#00e5ff" transparent opacity={0.18} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

function Moon() {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.05
    if (ref.current) {
      ref.current.position.x = -16 + Math.sin(t) * 1.5
      ref.current.position.y = 8 + Math.cos(t * 0.7) * 1
      ref.current.rotation.y = t
    }
  })
  return (
    <mesh ref={ref} position={[-16, 8, -22]}>
      <sphereGeometry args={[1.6, 32, 32]} />
      <meshStandardMaterial color="#c7c3e0" emissive="#8b86ad" emissiveIntensity={0.2} roughness={1} />
    </mesh>
  )
}

function Rig({ mouse }) {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouse.current.x * 0.6, 0.03)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouse.current.y * 0.4, 0.03)
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function SpaceBackground({ mouseRef }) {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 18], fov: 55 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={['#05030f']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#7c5cff" />
        <pointLight position={[-10, -5, 5]} intensity={0.6} color="#00e5ff" />
        <Starfield />
        <GalaxyDust mouse={mouseRef} />
        <Planet mouse={mouseRef} />
        <Moon />
        <Rig mouse={mouseRef} />
        <fog attach="fog" args={['#05030f', 18, 55]} />
      </Canvas>
    </div>
  )
}
