// src/pages/dashboard/Leads.jsx
import React from 'react';

const dummyLeads = [
  { id: 1, name: 'Alice Johnson', company: 'TechNova', email: 'alice@technova.com', status: 'New' },
  { id: 2, name: 'Bob Smith', company: 'InnoWare', email: 'bob@innoware.com', status: 'Contacted' },
  { id: 3, name: 'Clara Lee', company: 'StartEdge', email: 'clara@startedge.com', status: 'Qualified' },
];

export default function Leads() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Leads</h2>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyLeads.map((lead) => (
              <tr key={lead.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{lead.name}</td>
                <td className="px-4 py-3">{lead.company}</td>
                <td className="px-4 py-3">{lead.email}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    lead.status === 'New' ? 'bg-blue-100 text-blue-700' :
                    lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {lead.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
