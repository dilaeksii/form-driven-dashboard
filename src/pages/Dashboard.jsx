export function Dashboard() {
  const stats = [
    {
      label: "Submission",
      value: "1,284",
      hint: "+12 this week",
    },
    {
      label: "Pending",
      value: "37",
      hint: "needs action!",
    },
    {
      label: "Approved",
      value: "12",
      hint: "nice!",
    },
    {
      label: "Conversion",
      value: "4.8%",
      hint: "up 0.6%",
    },
  ];

  const activity = [
    {
      title: "New Submission",
      description: "Employee Onboarding",
      time: "2m",
    },
    {
      title: "Workflow Updated",
      description: "KYC Review",
      time: "1h",
    },
    {
      title: "Approved",
      description: "Vendor Form",
      time: "2h",
    },
  ];

  const actions = [
    {
      title: "Create Workflow",
      subtitle: "New automation",
      to: "/workflows",
      icon: "+",
      theme: "text-blue-500",
    },
    {
      title: "Review Pending",
      subtitle: "37 items need action",
      to: "/reports",
      icon: "!",
      theme: "text-orange-500",
    },
    {
      title: "View Reports",
      subtitle: "Analytics & exports",
      to: "/reports",
      icon: "📊",
      theme: "text-green-500",
    },
    {
      title: "Settings",
      subtitle: "Manage account",
      to: "/settings",
      icon: "⚙️",
      theme: "text-gray-500",
    },
  ];

  return (
    <>
      <div className="flex justify-between">
        <h6 className="bold text-2xl">Dashboard</h6>
        <button className="bg-blue-500 hover:bg-blue-400 text-white py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Create Workflow
        </button>
      </div>
      <p className="mt-2">Overview of your form activity</p>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-10">
        {stats.map((status, index) => (
          <div
            key={index}
            className="flex flex-col border rounded py-4 items-center gap-2 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h1 className="text-gray-500 text-sm">{status.label}</h1>
            <p className="text-2xl font-semibold">{status.value}</p>
            <p className="text-blue-500 text-sm">{status.hint}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-8 mt-6 place-items-center">
        <div className="w-96 mt-10 border rounded bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-6">
          <a href="#" className="flex justify-self-end text-blue-500 mb-4">
            View All
          </a>
          <ul className="divide-y divide-gray-100">
            {activity.map((act, index) => (
              <li
                key={index}
                className="py-3 flex items-start justify-between gap-4"
              >
                <div>
                  <p className="font-medium">{act.title}</p>
                  <p className="text-sm text-gray-500">{act.description}</p>
                </div>

                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {act.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-96 mt-10 border rounded bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col gap-4">
          {actions.map((act, index) => (
            <div key={index}>
              <span>
                {act.icon}
                <a href={act.to} className={act.theme}>
                  {act.title}
                </a>
              </span>
              <p>{act.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
