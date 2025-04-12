import { useState } from "react";

const tabData = [
  { id: 1, label: "Tab one", content: "محتوای تب اول" },
  { id: 2, label: "Tab two", content: "محتوای تب دوم" },
  { id: 3, label: "Tab three", content: "محتوای تب سوم" },
];

export default function TabIndicator() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="p-10">
      <div className="flex flex-col rounded-2xl overflow-auto border-2 border-blue-700/70">
        <div className="min-w-full px-5">
          <ul className="flex justify-center gap-x-8 sm:gap-x-20 border-b-2 border-b-blue-400/50 whitespace-nowrap">
            {tabData.map((tab) => (
              <li key={tab.id}>
                <h2>
                  <button
                    className={`py-2 cursor-pointer border-b-blue-700/70 ${activeTab === tab.id ? "border-b-2" : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                </h2>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5 h-auto">{tabData[activeTab - 1].content}</div>
      </div>
    </div>
  );
}
