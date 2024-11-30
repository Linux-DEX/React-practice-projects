import { useState } from "react";
import Fetch1 from "../components/Fetch1";
import Fetch2 from "../components/Fetch2";
import Fetch3 from "../components/Fetch3";
import Fetch4 from "../components/Fetch4";
import Fetch5 from "../components/Fetch5";
import Fetch6 from "../components/Fetch6";

const Fetch = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");

  const renderTabContent = () => {
    switch (selectedTab) {
      case "tab1":
        return <Fetch1 />;
      case "tab2":
        return <Fetch2 />;
      case "tab3":
        return <Fetch3 />;
      case "tab4":
        return <Fetch4 />;
      case "tab5":
        return <Fetch5 />;
      case "tab6":
        return <Fetch6 />;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <>
      <div className="flex max-h-[90vh] bg-gray-100">
        <div className="bg-slate-700 text-white w-64 p-6 flex flex-col rounded-lg">
          <h1 className="text-2xl font-bold mb-8 text-blue-400">
            Fetch Method
          </h1>
          <nav>
            <ul>
              <li className="mb-4">
                <button
                  onClick={() => setSelectedTab("tab1")}
                  className={`text-lg font-medium w-full text-left p-2 rounded-md ${
                    selectedTab === "tab1"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-200"
                  }`}>
                  Fetch.then
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setSelectedTab("tab2")}
                  className={`text-lg font-medium w-full text-left p-2 rounded-md ${
                    selectedTab === "tab2"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-200"
                  }`}>
                  Fetch async await
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setSelectedTab("tab3")}
                  className={`text-lg font-medium w-full text-left p-2 rounded-md ${
                    selectedTab === "tab3"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-200"
                  }`}>
                  stale-while-revalidate(swr)
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setSelectedTab("tab4")}
                  className={`text-lg font-medium w-full text-left p-2 rounded-md ${
                    selectedTab === "tab4"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-200"
                  }`}>
                  React-Query library (TanStack Query)
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setSelectedTab("tab5")}
                  className={`text-lg font-medium w-full text-left p-2 rounded-md ${
                    selectedTab === "tab5"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-200"
                  }`}>
                  useFetch hook
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setSelectedTab("tab6")}
                  className={`text-lg font-medium w-full text-left p-2 rounded-md ${
                    selectedTab === "tab6"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-200"
                  }`}>
                  Canceling a fetch request
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex-1 p-8 bg-white overflow-hidden">
          <div className="bg-white rounded-lg shadow-md p-6 h-full overflow-hidden">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Fetch;
