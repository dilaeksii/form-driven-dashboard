import { NavLink } from "react-router-dom/cjs/react-router-dom";

export function SideBar() {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <div className="font-semibold mb-6">SideBar</div>
      <nav className="space-y-2 text-sm text-gray-700 flex flex-col">
        <NavLink
          exact
          to="/dashboard"
          style={(isActive) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "#3B82F6" : "",
          })}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/reports"
          style={(isActive) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "#3B82F6" : "",
          })}
        >
          Reports
        </NavLink>
        <NavLink
          to="/workflows"
          style={(isActive) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "#3B82F6" : "",
          })}
        >
          Workflows
        </NavLink>
        <NavLink
          to="/settings"
          style={(isActive) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "#3B82F6" : "",
          })}
        >
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}
