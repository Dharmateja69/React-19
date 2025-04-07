export default function GitHubStatsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[var(--theme-color)] mb-6">
        GitHub Statistics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* You would embed your GitHub stats here */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Contribution Graph</h2>
          {/* Placeholder for GitHub graph */}
          <div className="bg-gray-100 h-48 rounded flex items-center justify-center">
            GitHub Contribution Graph
          </div>
        </div>
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Repository Stats</h2>
          {/* Placeholder for stats */}
          <div className="space-y-3">
            <p>Total Repositories: 24</p>
            <p>Total Stars: 156</p>
            <p>Languages: JavaScript, TypeScript, Python</p>
          </div>
        </div>
      </div>
    </div>
  );
}
