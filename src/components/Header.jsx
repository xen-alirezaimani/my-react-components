import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full h-10 flex items-center justify-around">
      <nav>
        <ul className="mx-auto flex gap-5 whitespace-nowrap">
          <li>
            <Link to="tab" className="text-xl text-red-400">
              Tab Indicator
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
