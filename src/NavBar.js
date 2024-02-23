import { BsFillMoonStarsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { navLinks } from "./constants";

export default function NavBar(props) {
  const { onDarkMode } = props;
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);
  // const handleDarkMode = () => {
  //   console.log("hi");
  //   setDarkMode(!darkMode);
  // };
  return (
    <div className=" ">
      <div className="fixed w-full  top-0 z-20 bg-flashWhite sm:opacity-[0.97]">
        <main className="bg-white px-10 dark:bg-gray-900">
          <nav className="pt-5 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-neutral-100 ">developedby</h1>
            <div className="flex ">
              <BsFillMoonStarsFill
                onClick={onDarkMode}
                className="cursor-pointer mr-2"
              />
              {/* <li className="mr-2 dark:text-neutral-100">
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
          </li> */}
              <ul className="flex justify-between">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    lassName="mr-2 dark:text-neutral-100"
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8  "
                  >
                    Resume
                  </a>
                </li>{" "}
              </ul>
            </div>
          </nav>
        </main>{" "}
      </div>
    </div>
  );
}
