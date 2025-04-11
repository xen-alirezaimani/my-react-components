import { useState } from "react";

const tabData = [
  { id: 1, label: "Tab one", content: "محتوای تب اول" },
  { id: 2, label: "Tab two", content: "محتوای تب دوم" },
  { id: 3, label: "Tab three", content: "محتوای تب سوم" },
];

export default function TabIndicator() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="tab border-1 border-gray-400 rounded-lg px-6 py-10">
      <div className="tab__header flex justify-between items-center border-b border-slate-400 pb-4 mb-1">
        {tabData.map((tab) => (
          <button key={tab.id} className={activeTab === tab.id ? "active" : ""} onClick={() => setActiveTab(tab.id)}>
            <span>{tab.label}</span>
            <span className="tab-indicator"></span>
          </button>
        ))}
      </div>
      <div className="tab__content">{tabData[activeTab - 1].content}</div>
    </div>

    // <div className="flex overflow-auto">
    //   <div className="min-w-full">
    //     <ul className="flex gap-x-6 border-b border-gray-500/5 whitespace-nowrap">
    //       {tabData.map((tab) => (
    //         <li key={tab.id}>
    //           <button
    //             className={activeTab === tab.id ? "active" : ""}
    //             onClick={() => setActiveTab(tab.id)}
    //           >
    //             {tab.label}
    //           </button>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>

    // <div className="flex overflow-auto">
    //   <div className="min-w-full">
    //     <ul className="flex gap-x-6 border-b border-gray-500/5 whitespace-nowrap">
    //       <li>
    //         <h2>
    //           <a className="flex active:border-b pb-2 text-sm" href="/">
    //             alireza
    //           </a>
    //         </h2>
    //       </li>
    //       <li>
    //         <h2>
    //           <a className="flex active:border-b pb-2 text-sm" href="/">
    //             alireza
    //           </a>
    //         </h2>
    //       </li>
    //       <li>
    //         <h2>
    //           <a className="flex active:border-b pb-2 text-sm" href="/">
    //             alireza
    //           </a>
    //         </h2>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}
