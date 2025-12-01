"use client";

import { signOut } from "next-auth/react";

export default function Topbar() {
  return (
    <div style={{
      width: "100%",
      background: "#222",
      color: "#fff",
      padding: "15px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h3>Admin Dashboard</h3>

      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        style={{
          padding: "8px 15px",
          background: "red",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </div>
  );
}
