import { useState } from "react";
import Axios1 from "../components/Axios1";
import Axios2 from "../components/Axios2";
import Axios3 from "../components/Axios3";

const Axios = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");

  const renderTabContent = () => {
    switch (selectedTab) {
      case "tab1":
        return <Axios1 />;
      case "tab2":
        return <Axios2 />;
      case "tab3":
        return <Axios3 />;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <>
      <div className="flex max-h-[90vh] bg-gray-100">
        <div className="bg-slate-700 text-white w-64 p-6 flex flex-col rounded-lg">
          <h1 className="text-2xl font-bold mb-8 text-blue-400">
            Axios Method
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
                  }`}
                >
                  Axios.then
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setSelectedTab("tab2")}
                  className={`text-lg font-medium w-full text-left p-2 rounded-md ${
                    selectedTab === "tab2"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-200"
                  }`}
                >
                  Axios Async await
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setSelectedTab("tab3")}
                  className={`text-lg font-medium w-full text-left p-2 rounded-md ${
                    selectedTab === "tab3"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-200"
                  }`}
                >
                  Axios instance
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

export default Axios;
