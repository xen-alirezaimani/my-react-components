import { useState } from "react";
import { Link } from "react-router-dom";

const componentsData = [
  { id: 1, title: "Tab Indicator", url: "tab" },
  { id: 2, title: "modal", url: "modal" },
  { id: 3, title: "DropDown", url: "dropdown" },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <header className="w-full h-20 flex items-center justify-around bg-amber-100">
      <nav>
        <ul className="mx-auto flex gap-5 whitespace-nowrap">
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <span>Componets</span>
            {openDropdown && (
              <ul className="flex flex-col justify-center items-center absolute px-4 py-2 rounded-xl bg-gray-200">
                {componentsData.map((item) => (
                  <li key={item.id} className="w-full py-2 border-b border-b-gray-600 last:border-b-0">
                    <Link to={item.url} onClick={() => setOpenDropdown(false)}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
