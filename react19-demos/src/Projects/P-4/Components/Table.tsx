import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BiFilter, BiSort } from "react-icons/bi";
import { data } from "../utils/data";

interface Project {
  client: string;
  country: string;
  email: string;
  project: string;
  progress: string;
  status: string;
  date: string;
  image: string;
}

const Table = () => {
  const [projects, setProjects] = useState<Project[]>(data);
  const [dropdown, setDropdown] = useState(false);
  const [filterDropdown, setFilterDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Project;
    direction: string;
  } | null>(null);
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const itemsPerPage = 5;
  const sortProjects = (key: keyof Project) => {
    let sortedProjects = [...projects];

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      sortedProjects.sort((a, b) => (a[key] > b[key] ? -1 : 1));
      setSortConfig({ key, direction: "descending" });
    } else {
      sortedProjects.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      setSortConfig({ key, direction: "ascending" });
    }

    setProjects(sortedProjects);
  };

  const handleSortOptionClick = (key: keyof Project) => {
    sortProjects(key);
    setDropdown(false);
  };

  const filterProjects = () => {
    let filteredProjects = data.filter((project) => {
      return Object.keys(filters).every((key) =>
        project[key as keyof Project]
          .toString()
          .toLowerCase()
          .includes(filters[key].toLowerCase())
      );
    });
    setProjects(filteredProjects);
  };

  const handleFilterChange = (key: keyof Project, value: string) => {
    setFilters({ ...filters, [key]: value });
    filterProjects();
  };

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  // Get current page data
  const paginatedProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle next and previous
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-4 w-[93%] ml-[5rem] h-full">
      {/* Sorting and Filtering */}
      <div className="flex items-center mb-5 space-x-4">
        <div className="relative">
          <button
            onClick={() => setDropdown(!dropdown)}
            className="border border-gray-700 flex items-center justify-center text-white p-2 rounded"
          >
            <BiSort className="mr-[0.3rem]" />
            Sort
            <AiOutlineDown className="ml-2" />
          </button>
          {dropdown && (
            <div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg">
              <button
                onClick={() => handleSortOptionClick("client")}
                className="block px-4 py-2 text-white w-full hover:bg-gray-700"
              >
                Name
              </button>
              <button
                onClick={() => handleSortOptionClick("country")}
                className="block px-4 py-2 text-white w-full hover:bg-gray-700"
              >
                Country
              </button>
              <button
                onClick={() => handleSortOptionClick("date")}
                className="block px-4 py-2 text-white w-full hover:bg-gray-700"
              >
                Date
              </button>
            </div>
          )}
        </div>

        {/* Filter */}
        <div className="relative">
          <button
            onClick={() => setFilterDropdown(!filterDropdown)}
            className="border border-gray-700 flex items-center justify-center text-white p-2 rounded"
          >
            <BiFilter className="mr-[0.3rem]" />
            Filter
            <AiOutlineDown className="ml-2" />
          </button>
          {filterDropdown && (
            <div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg">
              <div className="p-4 space-y-2">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    onChange={(e) =>
                      handleFilterChange("client", e.target.value)
                    }
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    onChange={(e) =>
                      handleFilterChange("country", e.target.value)
                    }
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Status"
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    onChange={(e) =>
                      handleFilterChange("status", e.target.value)
                    }
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Date"
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    onChange={(e) => handleFilterChange("date", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main table */}
      <div className="overflow-auto h-[calc(100vh-6rem)] bg-gray-900">
        <table className="min-w-full table-auto rounded border border-gray-700 text-white">
          <thead>
            <tr>
              <th className="px-5 py-3 text-left">Image</th>
              <th className="px-5 py-3 text-left">Name</th>
              <th className="px-5 py-3 text-left">Country</th>
              <th className="px-5 py-3 text-left">Email</th>
              <th className="px-5 py-3 text-left">Project Name</th>
              <th className="px-5 py-3 text-left">Task Progress</th>
              <th className="px-5 py-3 text-left">Status</th>
              <th className="px-5 py-3 text-left">Date</th>
              <th className="px-5 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="border border-gray-700">
                <td className="px-4 py-2">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2">{project.client}</td>
                <td className="px-4 py-2">{project.country}</td>
                <td className="px-4 py-2">{project.email}</td>
                <td className="px-4 py-2">{project.project}</td>
                <td className="px-4 py-2">{project.progress}</td>
                <td className="px-4 py-2">{project.status}</td>
                <td className="px-4 py-2">{project.date}</td>
                <td className="px-4 py-2">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-700 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
