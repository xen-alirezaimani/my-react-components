import { useState } from "react";

const tabData = [
  { id: 1, label: "Tab one", content: "محتوای تب اول" },
  { id: 2, label: "Tab two", content: "محتوای تب دوم" },
  { id: 3, label: "Tab three", content: "محتوای تب سوم" },
];

export default function TabIndicator() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="tab">
      <div className="tab__header">
        {tabData.map((tab) => (
          <button key={tab.id} className={activeTab === tab.id ? "active" : ""} onClick={() => setActiveTab(tab.id)}>
            <span>{tab.label}</span>
            <span className="tab-indicator"></span>
          </button>
        ))}
      </div>
      <div className="tab__content">{tabData[activeTab - 1].content}</div>
    </div>
  );
}
