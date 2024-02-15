import { BsFillMoonStarsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  const { onDarkMode } = props;
  return (
    <div>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl dark:text-neutral-100 ">developedby</h1>
        <ul className="flex items-center">
          <BsFillMoonStarsFill
            onClick={onDarkMode}
            className="cursor-pointer mr-2"
          />
          <li className="mr-2 dark:text-neutral-100">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-2 first-line:dark:text-neutral-100">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-2 dark:text-neutral-100">
            <Link to="/experience">Experience</Link>
          </li>
          <li className="mr-2 dark:text-neutral-100">
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a
              href="#"
              className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8  "
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
