export default function ResourcesPage() {
  const resources = [
    {
      title: "React Documentation",
      url: "https://reactjs.org/docs",
      category: "Frontend",
    },
    // Add more resources
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[var(--theme-color)] mb-6">
        Learning Resources
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Link
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {resources.map((resource) => (
              <tr key={resource.url}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {resource.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {resource.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href={resource.url}
                    className="text-[var(--theme-color)] hover:underline"
                  >
                    Visit Resource
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
