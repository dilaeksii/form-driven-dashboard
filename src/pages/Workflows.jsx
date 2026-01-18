import { initFlowbite } from "flowbite";
import { useEffect } from "react";

export function Workflows() {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <>
      <div className="flex justify-between">
        <h6 className="bold text-2xl">Workflow</h6>
        <button className="bg-blue-500 hover:bg-blue-400 text-white py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Create Workflow
        </button>
      </div>
      <p className="mt-2"> Manage your automation flows...</p>
      <div className="mt-5 flex flex-row justify-between">
        <form className="w-80">
          <label
            htmlFor="search"
            className="block mb-2.5 text-sm font-medium text-heading sr-only "
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-body"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body rounded-md"
              placeholder="Search..."
              required
            />
            <button
              type="button"
              className="bg-blue-500 absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"
            >
              Search
            </button>
          </div>
        </form>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="rounded-md bg-blue-500 inline-flex items-center justify-between text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-64"
          type="button"
        >
          Status
          <svg
            className="w-4 h-4 ms-1.5 -me-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 9-7 7-7-7"
            />
          </svg>
        </button>
        <div
          id="dropdown"
          className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-md shadow-lg w-64"
        >
          <ul
            className="p-2 text-sm text-body font-medium"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
              >
                Pending
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
              >
                In Review
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
              >
                Approved
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
              >
                Rejected
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
              >
                Archived
              </a>
            </li>
          </ul>
        </div>
        <button
          id="sortDropdownButton"
          data-dropdown-toggle="sortDropdown"
          className="rounded-md bg-blue-500 inline-flex items-center justify-between text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-64"
          type="button"
        >
          Sort
          <svg
            className="w-4 h-4 ms-1.5 -me-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 9-7 7-7-7"
            />
          </svg>
        </button>
        <div
          id="sortDropdown"
          className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-md shadow-lg w-64"
        >
          <ul
            className="p-2 text-sm text-body font-medium"
            aria-labelledby="sortDropdownButton"
          >
            <li>
              <a
                href="#"
                className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
              >
                Newest
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
              >
                Oldest
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-5">
        <p>All Workflows</p>
        <p>Showing 1–9 of 12</p>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 mt-5">
        <div className="bg-neutral-primary-soft flex flex-col justify-evenly max-w-sm p-6 border border-default rounded-md shadow-xs h-64">
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-heading">
              Employee Onboarding
            </h5>
          </a>
          <p className="mb-3 text-body">
            Automates employee onboarding approvals
          </p>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <span>🧾</span>
              <a
                href="#"
                className="inline-flex font-medium items-center text-fg-brand hover:underline"
              >
                View Details
              </a>
            </div>
            <div className="flex gap-5">
    <div className="flex gap-1">
              <span>✏️</span>
              <a
                href="#"
                className="inline-flex font-medium items-center text-fg-brand hover:underline"
              >
                Edit
              </a>
            </div>
            <div className="flex gap-1">
              <span>🧩</span>
              <button
          id="workflowDropdownButton"
          data-dropdown-toggle="workflowDropdown"
          className="inline-flex items-center justify-between font-medium leading-5 text-md px-1 focus:outline-none"
          type="button"
        >
          More
        </button>
        <div
          id="workflowDropdown"
          className="z-20 hidden bg-neutral-primary-medium border border-default-medium rounded-md shadow-lg"
        >
          <ul
            className="p-2 text-sm text-body font-medium"
            aria-labelledby="workflowDropdownButton"
          >
            <li>
              <a
                href="#"
                className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
              >
                Delete
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
              >
                Archive
              </a>
            </li>
          </ul>
        </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
