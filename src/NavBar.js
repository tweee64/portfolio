import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { navLinks } from "./constants";
import { resume } from "./assets";
export default function NavBar(props) {
  const { onDarkMode } = props;
  const [active, setActive] = useState("");
  // const [toggle, setToggle] = useState(false);

  return (
    <div className=" ">
      <div className="fixed dark:bg-gray-900 w-full bg-color top-0 z-20 ">
        <main className="px-10 ">
          <nav className="pt-5 mb-12 flex justify-between ">
            <h1 className="text-xl dark:text-neutral-100 ">developedby</h1>
            <div className="flex dark:text-neutral-100">
              <BsFillMoonStarsFill
                onClick={onDarkMode}
                className="cursor-pointer mr-2"
              />

              <ul className="flex-row flex gap-3">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-french" : "text-eerieBlack"
                    } hover:text-taupe 
                       tracking-[3px] cursor-pointer nav-links mr-2 dark:text-neutral-100`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                <li>
                  <a
                    href={resume}
                    download
                    className="bg-color-button text-white px-4 py-2 rounded-md ml-8"
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
