export default function MusicPage() {
  const favoriteArtists = ["Artist 1", "Artist 2", "Artist 3"];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[var(--theme-color)] mb-6">
        Music I Love
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {favoriteArtists.map((artist) => (
          <div key={artist} className="border rounded-lg p-4 text-center">
            <div className="bg-gray-100 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl">🎵</span>
            </div>
            <h2 className="text-xl font-medium">{artist}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
