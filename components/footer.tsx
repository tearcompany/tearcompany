export default function Footer() {
  return (
    <footer className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 h-auto py-12 flex flex-col items-center justify-center text-center text-sm">
      <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-holy animate-fade-in mx-4">
        <p className="text-gray-600 mb-2">&copy; {new Date().getFullYear()} TEAR COMPANY. All rights reserved.</p>
        <p className="text-divine-blue font-medium">Crafted with Sacred Presence.</p>
      </div>
    </footer>
  )
}
