import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";

export function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
