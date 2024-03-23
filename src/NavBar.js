import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { navLinks } from "./constants";
import { resume } from "./assets";
import { FiAlignRight, FiX } from "react-icons/fi";

export default function NavBar(props) {
  const { onDarkMode } = props;
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" ">
      <div className="fixed dark:bg-gray-900 w-full bg-color top-0 z-20 ">
        <main className="px-10 ">
          <nav className="pt-5 mb-12 ml-2 flex justify-between ">
            <a href="logo" onClick={() => setActive("Home")}>
              <h1 className="text-[32px] dark:text-neutral-100 custom-font ">
                thuy
              </h1>
            </a>

            <div className="flex dark:text-neutral-100">
              <ul className="flex-row gap-3 list-none hidden sm:flex  mt-2">
                <div className="grid content-center mb-4 ">
                  <BsFillMoonStarsFill
                    onClick={onDarkMode}
                    className="justify-center cursor-pointer mr-2"
                  />
                </div>
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
              <div className=" sm:hidden flex flex-1 w-max justify-end items-center">
                {toggle ? (
                  <div className="">
                    <div className="flex justify-end">
                      <div className="grid content-center ">
                        <BsFillMoonStarsFill
                          onClick={onDarkMode}
                          className="justify-center cursor-pointer mr-2"
                        />
                      </div>
                      <FiX
                        className="w-[22px] h-[22px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                      />
                    </div>
                    <ul
                      className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end  -ml-[35px] "
                    >
                      {navLinks.map((nav) => (
                        <li
                          key={nav.id}
                          className={`${
                            active === nav.title
                              ? "text-french"
                              : "text-eerieBlack"
                          } hover:text-taupe 
                           cursor-pointer nav-links mt-2 dark:text-neutral-100`}
                          onClick={() => setActive(nav.title)}
                        >
                          <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                      ))}
                      <li className="mt-3">
                        <a
                          href={resume}
                          download
                          className="bg-color-button dark:bg-teal-500 text-white  px-4 py-2 rounded-md "
                        >
                          Resume
                        </a>
                      </li>{" "}
                    </ul>
                  </div>
                ) : (
                  <div className="flex justify-end">
                    <div className="grid content-center ">
                      <BsFillMoonStarsFill
                        onClick={onDarkMode}
                        className="justify-center cursor-pointer mr-2"
                      />
                    </div>

                    <FiAlignRight
                      className="w-[22px] h-[22px] object-contain cursor-pointer"
                      onClick={() => setToggle(!toggle)}
                    />
                  </div>
                )}
              </div>
            </div>
          </nav>
        </main>{" "}
      </div>
    </div>
  );
}
