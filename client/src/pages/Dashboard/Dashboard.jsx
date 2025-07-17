import { Outlet, NavLink } from "react-router-dom";

export default function DashboardLayout() {
  const navItems = [
    { name: "Home", path: "/dashboard" },
    { name: "Leads", path: "/dashboard/leads" },
    { name: "Tasks", path: "/dashboard/tasks" },
    { name: "Emails", path: "/dashboard/emails" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-blue-700 text-white flex flex-col p-6 space-y-4">
        <h2 className="text-xl font-bold mb-4">LeadBridge CRM</h2>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive ? "bg-white text-blue-700" : "hover:bg-blue-600"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </aside>
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
