import { useUserStore } from "../../store/useUserStore";

const Navbar = () => {
  const { user, role, isAuthenticated, login, logout, setRole } =
    useUserStore();

  const handleLogin = (selectedRole: "user" | "admin") => {
    login({ name: "Test User" }, selectedRole);
    setRole(selectedRole); // Explicitly set the role
  };

  return (
    <nav className="w-full h-16 px-6 flex items-center justify-between bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="text-xl font-bold text-[var(--theme-color)]">
        ⚡ Dynamic Dashboard
      </div>

      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Role:{" "}
              <strong className="text-[var(--theme-color)] capitalize">
                {role}
              </strong>
            </span>
            <div className="w-9 h-9 bg-[var(--theme-color)] rounded-full flex items-center justify-center text-white font-bold">
              {user?.name.charAt(0).toUpperCase()}
            </div>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => handleLogin("user")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              Login as User
            </button>
            <button
              onClick={() => handleLogin("admin")}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
            >
              Login as Admin
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
