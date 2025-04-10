import AdminPanel from "./ReactDesign_PATTERNS/Challenges/Hoc/components/AdminPanel";
import withAccessControl from "./ReactDesign_PATTERNS/Challenges/Hoc/hoc/withAccessControl";
import useAuthStore from "./ReactDesign_PATTERNS/Challenges/Hoc/store/useAuthStore";

const AdminPanelWithAccess = withAccessControl(AdminPanel, {
  allowedRoles: ["admin", "editor"],
  injectPropsByRole: {
    admin: {
      showAdminFeatures: true,
      customMessage: "Hello Admin 👑",
    },
    editor: {
      customMessage: "Hello Editor ✏️",
    },
  },
});

const App = () => {
  const { role, setRole } = useAuthStore();
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Role-Based Access Control Demo</h1>
      <div>
        <label>Switch Role: </label>
        <select value={role} onChange={(e) => setRole(e.target.value as any)}>
          <option value="viewer">Viewer</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <hr />

      <AdminPanelWithAccess />
    </div>
  );
};

export default App;
