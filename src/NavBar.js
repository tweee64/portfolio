import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { navLinks } from "./constants";
import { resume, close, menu } from "./assets";
export default function NavBar(props) {
  const { onDarkMode } = props;
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" ">
      <div className="fixed dark:bg-gray-900 w-full bg-color top-0 z-20 ">
        <main className="px-10 ">
          <nav className="pt-5 mb-12 flex justify-between ">
            <h1 className="text-xl dark:text-neutral-100 ">developedbythuy</h1>
            <div className="flex dark:text-neutral-100">
              <BsFillMoonStarsFill
                onClick={onDarkMode}
                className="cursor-pointer mr-2"
              />

              <ul className="flex-row gap-3 list-none hidden sm:flex  mt-2">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-french" : "text-eerieBlack"
                    } hover:text-taupe 
                        cursor-pointer nav-links mr-2 dark:text-neutral-100`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                <li>
                  <a
                    href={resume}
                    download
                    className="bg-color-button dark:bg-teal-500 text-white  px-4 py-2 rounded-md ml-8"
                  >
                    Resume
                  </a>
                </li>{" "}
              </ul>
              {/* mobile */}
              <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
                {toggle ? (
                  <div
                    className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? "menu-open" : "menu-close"
                }`}
                  >
                    <div className="flex justify-end">
                      <img
                        src={close}
                        alt="close"
                        className="w-[22px] h-[22px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                      />
                    </div>
                    <ul
                      className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end mt-[10rem] -ml-[35px]"
                    >
                      {navLinks.map((nav) => (
                        <li
                          id={nav.id}
                          key={nav.id}
                          className={`${
                            active === nav.title
                              ? "text-french"
                              : "text-eerieBlack"
                          } text-[88px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                          onClick={() => {
                            setToggle(!toggle);
                            setActive(nav.title);
                          }}
                        >
                          <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <img
                    src={menu}
                    alt="menu"
                    className="w-[34px] h-[34px] object-contain cursor-pointer"
                    onClick={() => setToggle(!toggle)}
                  />
                )}
              </div>
            </div>
          </nav>
        </main>{" "}
      </div>
    </div>
  );
}
