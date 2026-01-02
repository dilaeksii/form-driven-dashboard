import { useHistory } from "react-router-dom/cjs/react-router-dom";

export function Header({setIsAuth}) {

  let history = useHistory();

  return (
    <header className="h-14 bg-white border-b px-6 flex items-center justify-between">
      <div className="text-sm text-gray-600">Header</div>
      <div className="text-sm text-gray-600">User</div>
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        type="button"
        onClick={() => {
          localStorage.removeItem("auth");
          setIsAuth(false);
          history.push("/login");
        }}
      >
        Log Out
      </button>
    </header>
  );
}
