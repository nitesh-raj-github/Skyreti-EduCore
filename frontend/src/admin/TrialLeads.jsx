import React, { useEffect, useState } from "react";

export default function TrialLeads() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/trial")
      .then(res => res.json())
      .then(data => setLeads(data.data));
  }, []);

  return (
    <div style={{ padding: "2rem", color: "#fff" }}>
      <h2>📊 Free Trial Leads</h2>

      <table width="100%" border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Organization</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(l => (
            <tr key={l._id}>
              <td>{l.name}</td>
              <td>{l.email}</td>
              <td>{l.organization}</td>
              <td>{l.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
