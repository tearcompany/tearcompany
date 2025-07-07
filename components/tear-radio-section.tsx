"use client";

export default function TearRadioSection() {
  const playlistId = "3SgY6avLloaVMxE9uWYSqD";
  const spotifyEmbedUrl = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col items-center justify-center p-4 md:p-8 snap-start">
      <div className="w-full max-w-4xl animate-fade-in">
        <div className="text-center mb-8 md:mb-12">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-divine border border-white/50 mb-8">
            <h2 className="text-4xl md:text-6xl font-bold font-playfair bg-gradient-to-r from-divine-blue to-sacred-gold bg-clip-text text-transparent mb-4">
              TEAR RADIO
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-divine-blue to-sacred-gold mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A stream of consciousness. Rhythm carved by the road. Not
              algorithm.
            </p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-xl border border-white/60 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sacred">
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-holy">
            <iframe
              src={spotifyEmbedUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Sacred Frequencies - Tear Radio"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
