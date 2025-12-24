export function SideBar() {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <div className="font-semibold mb-6">SideBar</div>
      <nav className="space-y-2 text-sm text-gray-700">
        <div>Dashboard</div>
        <div>Reports</div>
        <div>Workflows</div>
        <div>Settings</div>
      </nav>
    </aside>
  );
}
