// src/components/AdminPanel.tsx

interface AdminPanelProps {
  showAdminFeatures?: boolean;
  customMessage?: string;
}

const AdminPanel = ({ showAdminFeatures, customMessage }: AdminPanelProps) => {
  return (
    <div>
      <h2>Welcome to the Admin Panel 🚀</h2>
      {showAdminFeatures && <p>You have access to exclusive admin tools.</p>}
      {customMessage && <p>{customMessage}</p>}
    </div>
  );
};

export default AdminPanel;
