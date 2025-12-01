export default function Sidebar() {
  return (
    <div style={{
      width: "220px",
      background: "#111",
      color: "#fff",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <h2>ADMIN</h2>
      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        <li><a href="/admin" style={{ color: "#fff" }}>Dashboard</a></li>
        <li><a href="/admin/users" style={{ color: "#fff" }}>Users</a></li>
        <li><a href="/admin/settings" style={{ color: "#fff" }}>Settings</a></li>
      </ul>
    </div>
  );
}
