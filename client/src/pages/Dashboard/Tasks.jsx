// src/pages/dashboard/Tasks.jsx
import React from 'react';

const dummyTasks = [
  { id: 1, title: 'Call Alice', dueDate: '2025-07-20', assignedTo: 'You', status: 'Pending' },
  { id: 2, title: 'Email Bob about pricing', dueDate: '2025-07-21', assignedTo: 'Team Member', status: 'Completed' },
  { id: 3, title: 'Demo for Clara', dueDate: '2025-07-22', assignedTo: 'You', status: 'In Progress' },
];

export default function Tasks() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Due Date</th>
              <th className="px-4 py-3">Assigned To</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyTasks.map((task) => (
              <tr key={task.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{task.title}</td>
                <td className="px-4 py-3">{task.dueDate}</td>
                <td className="px-4 py-3">{task.assignedTo}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    task.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                    task.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {task.status}
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
