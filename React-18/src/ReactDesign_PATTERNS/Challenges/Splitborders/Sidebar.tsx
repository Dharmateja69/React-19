const Sidebar = () => {
  return (
    <div className="h-screen bg-black text-white p-5">
      <ul className="space-y-5">
        <li>
          <a
            href="#"
            className="block border px-2 py-1 rounded-lg hover:bg-gray-700"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block border px-2 py-1 rounded-lg hover:bg-gray-700"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block border px-2 py-1 rounded-lg hover:bg-gray-700"
          >
            Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
