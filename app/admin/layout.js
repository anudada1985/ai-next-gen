import "../globals.css";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

export const metadata = {
  title: "Admin Dashboard",
};

export default function AdminLayout({ children }) {
  return (
    <div className="admin-container" style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Topbar />
        <div style={{ padding: "20px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
