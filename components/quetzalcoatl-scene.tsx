"use client"

import * as THREE from "three"
import { Suspense, useRef, useEffect, useState } from "react"
import { useFrame, Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls, Sparkles, Environment, Html } from "@react-three/drei"
import type { GroupProps } from "@react-three/fiber"

function QuetzalcoatlModel(props: GroupProps) {
  const { scene } = useGLTF("/models/quetzalcoatl.glb")
  const modelRef = useRef<THREE.Group>(null!)
  const initialY = 35
  const targetY = 5.5
  const descentSpeed = 0.005

  useFrame((state, delta) => {
    if (modelRef.current) {
      if (modelRef.current.position.y > targetY) {
        modelRef.current.position.y -= descentSpeed * (1 + (modelRef.current.position.y - targetY) * 0.1)
      } else {
        modelRef.current.position.y = targetY
      }
      modelRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.005
      modelRef.current.rotation.y += delta * 0.05
    }
  })

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.05} // Skala pozostaje zwiększona
      position={[0, initialY, 0]}
      rotation={[0, Math.PI, 0]}
      {...props}
    />
  )
}
useGLTF.preload("/models/quetzalcoatl.glb")

function AztecPlatform() {
  const texture = new THREE.CanvasTexture(createGlyphTexture())
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(4, 1)

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
      <cylinderGeometry args={[8, 8.5, 0.5, 64]} />
      <meshStandardMaterial color="#4a3b3c" roughness={0.7} metalness={0.3} />
      <mesh position={[0, 0, 0.251]}>
        <cylinderGeometry args={[7.8, 7.8, 0.05, 64, 1, false, 0, Math.PI * 2]} />
        <meshStandardMaterial
          map={texture}
          emissiveMap={texture}
          emissive={new THREE.Color("rgb(216, 199, 68)").multiplyScalar(0.8)}
          emissiveIntensity={1.5}
          toneMapped={false}
          color="#5c4d4e"
        />
      </mesh>
    </mesh>
  )
}

function createGlyphTexture() {
  const canvas = document.createElement("canvas")
  canvas.width = 512
  canvas.height = 128
  const context = canvas.getContext("2d")!
  context.fillStyle = "#332211"
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.font = "bold 60px sans-serif"
  context.fillStyle = "rgb(216, 199, 68)"
  context.textAlign = "center"
  context.textBaseline = "middle"
  const glyphs = ["✧", "✹", "✜", "※", "❂", "✥"]
  for (let i = 0; i < 5; i++) {
    context.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], i * 100 + 50, 64 + (Math.random() - 0.5) * 10)
  }
  return canvas
}

function GlowingVines() {
  const vines = Array.from({ length: 10 }).map((_, i) => {
    const points = []
    const y = -5
    for (let j = 0; j < 10; j++) {
      points.push(
        new THREE.Vector3(
          Math.sin(j * 0.5 + i) * (8 + Math.random() * 2),
          y + j * (1 + Math.random()),
          Math.cos(j * 0.3 + i) * (8 + Math.random() * 2),
        ),
      )
    }
    return new THREE.CatmullRomCurve3(points)
  })

  return (
    <group>
      {vines.map((curve, index) => (
        <mesh key={index}>
          <tubeGeometry args={[curve, 64, 0.05 + Math.random() * 0.05, 8, false]} />
          <meshStandardMaterial
            emissive={new THREE.Color(0x7fff00).multiplyScalar(0.6)} // Przywrócono poprzednią intensywność
            emissiveIntensity={1} // Przywrócono poprzednią intensywność
            toneMapped={false}
            color={0x335511}
            roughness={0.8}
          />
        </mesh>
      ))}
    </group>
  )
}

function AudioPlayer({ onCanPlay }: { onCanPlay: () => void }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.oncanplaythrough = () => {
        onCanPlay()
      }
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
            setIsPlaying(true)
          })
          .catch((error) => {
            console.info("Audio autoplay was prevented. User interaction needed.")
            setIsPlaying(false)
          })
      }
    }
  }, [onCanPlay])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((error) => console.error("Audio play failed:", error))
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <Html center>
      <div style={{ position: "fixed", top: "20px", left: "20px", zIndex: 100 }}>
        <audio ref={audioRef} src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bravum-BRFC42BAMa6RSr7j1pGRRrB1LSpCUZ.wav" loop />
        <button
          onClick={togglePlay}
          className="px-4 py-2 bg-gold-bar text-white font-semibold rounded-md shadow-md hover:bg-gold-bar-light transition-colors"
        >
          {isPlaying ? "Pause Music" : "Play Music (Bravum)"}
        </button>
      </div>
    </Html>
  )
}

export function QuetzalcoatlScene() {
  const [audioReady, setAudioReady] = useState(false)

  return (
    <Canvas
      shadows
      camera={{ position: [0, 10, 25], fov: 50, near: 0.1, far: 1000 }}
      gl={{ antialias: true, alpha: false }}
      onCreated={({ gl, scene: canvasScene }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.outputColorSpace = THREE.SRGBColorSpace
        canvasScene.fog = new THREE.FogExp2(0x070710, 0.015)
      }}
    >
      <AudioPlayer onCanPlay={() => setAudioReady(true)} />
      <ambientLight intensity={0.3} color="#FFDDBB" />
      <directionalLight
        color="#FFAA77"
        intensity={2.5}
        position={[-15, 10, -10]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      <pointLight position={[0, 10, 0]} intensity={1.5} distance={30} decay={1.5} color="#FFEECC" />
      <Suspense
        fallback={
          <Html center>
            <p className="text-text-on-light text-lg">Loading model...</p>
          </Html>
        }
      >
        <QuetzalcoatlModel />
      </Suspense>
      <AztecPlatform />
      <GlowingVines />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#1a160c" roughness={0.9} />
      </mesh>
      <Sparkles count={200} scale={15} size={10} speed={0.3} color="rgb(216, 199, 68)" opacity={0.7} />{" "}
      {/* Przywrócono poprzednią przezroczystość */}
      <Environment preset="sunset" background={false} blur={0.5} />
      <OrbitControls
        target={[0, 3, 0]}
        minDistance={5}
        maxDistance={40}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.8}
        enablePan={false}
      />
    </Canvas>
  )
}
