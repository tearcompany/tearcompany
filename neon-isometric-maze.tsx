"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const NeonIsometricMaze: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const x = canvas.getContext("2d")
    if (!x) return

    let t = 0
    let animationFrameId: number

    const r = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const d = () => {
      if (!canvas || !x) return
      const s = Math.min(canvas.width, canvas.height) / 20
      const g = Math.ceil(canvas.width / s) * 1.5
      const h = Math.ceil(canvas.height / (s * 0.5)) * 1.5
      const w = canvas.width / 2
      const v = canvas.height / 2

      // The maze itself has a dark, semi-transparent background to allow some of the green to show through if desired
      // but primarily to provide contrast for the neon lines.
      x.fillStyle = "rgba(10, 10, 20, 0.1)" // Darker, slightly blueish, very transparent
      x.fillRect(0, 0, canvas.width, canvas.height)

      for (let yCoord = -h; yCoord < h; yCoord++) {
        for (let iCoord = -g; iCoord < g; iCoord++) {
          if (Math.random() < 0.3) continue

          const p = w + ((iCoord - yCoord) * s) / 2
          const q = v + ((iCoord + yCoord) * s) / 4
          const m = Math.sqrt(iCoord * iCoord + yCoord * yCoord)
          const n = Math.sqrt(g * g + h * h)
          const e = 1 - m / n
          const f = s * e * Math.abs(Math.sin(m * 0.3 + t * 0.5))

          x.beginPath()
          x.moveTo(p, q - f)
          x.lineTo(p + s / 2, q - s / 4 - f)
          x.lineTo(p + s, q - f)
          x.lineTo(p + s, q)
          x.lineTo(p + s / 2, q + s / 4)
          x.lineTo(p, q)
          x.closePath()

          const l = x.createLinearGradient(p, q - f, p + s, q)
          l.addColorStop(0, "rgba(0,255,255,.7)")
          l.addColorStop(1, "rgba(255,0,255,.7)")
          x.fillStyle = l
          x.fill()

          if (Math.random() < 0.2) {
            x.strokeStyle = "rgba(216, 199, 68, 0.5)" // gold-bar color for some strokes
            x.stroke()
          }
        }
      }
    }

    let lastFrameTime = 0
    const frameInterval = 1000 / 20

    const a = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(a)
      if (currentTime - lastFrameTime < frameInterval) {
        return
      }
      lastFrameTime = currentTime

      d()
      t += 0.03
    }

    window.addEventListener("resize", r)
    r()
    a(0)

    return () => {
      window.removeEventListener("resize", r)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="block w-full h-full" />
}

export default NeonIsometricMaze
