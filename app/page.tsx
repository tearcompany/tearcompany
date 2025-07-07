import { className } from "@/utils/styles"

import TearRadioSection from "@/components/tear-radio-section"
import AvatarsSection from "@/components/avatars-section"
import Footer from "@/components/footer"
import AngelClockCompass from "@/components/angel-clock-compass"

export default function HomePage() {
  return (
    <main className={className("relative", "min-h-screen", "w-full", "overflow-y-auto", "snap-y", "snap-mandatory")}>
      <AngelClockCompass />
      <TearRadioSection />
      <AvatarsSection />
      <Footer />
    </main>
  )
}
