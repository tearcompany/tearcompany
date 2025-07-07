"use client"

import dynamic from "next/dynamic"

// Dynamic import of the QuetzalcoatlScene
const QuetzalcoatlScene = dynamic(
  () => import("@/components/quetzalcoatl-scene").then((mod) => mod.QuetzalcoatlScene),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 flex items-center justify-center bg-content-bg-light">
        <p className="text-text-on-light text-center text-xl">Loading Sacred Grove...</p>
      </div>
    ),
  },
)

export default function QuetzalcoatlLoader() {
  return <QuetzalcoatlScene />
}
