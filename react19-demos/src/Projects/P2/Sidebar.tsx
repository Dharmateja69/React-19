const Sidebar = () => {
  return (
    <aside className="h-screen w-20 bg-gray-900 text-white fixed top-0 left-0 flex flex-col items-center py-6 space-y-8">
      {/* Sidebar Header */}
      <div className="text-2xl font-bold border-b border-gray-700 pb-3">D</div>

      {/* Sidebar Navigation */}
      <nav className="flex flex-col items-center space-y-6">
        <a href="#" className="p-3 rounded hover:bg-gray-700" title="Home">
          &#8962; {/* Home Icon */}
        </a>
        <a href="#" className="p-3 rounded hover:bg-gray-700" title="Profile">
          &#128100; {/* Profile Icon */}
        </a>
        <a href="#" className="p-3 rounded hover:bg-gray-700" title="Settings">
          &#9881; {/* Settings Icon */}
        </a>
        <a
          href="#"
          className="p-3 rounded hover:bg-gray-700 mt-auto"
          title="Logout"
        >
          &#10162; {/* Logout Icon */}
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
