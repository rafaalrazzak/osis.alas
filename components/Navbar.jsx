import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Button, Container, Link } from "@components";
import useIsScrollTop from "hooks/useIsScrollTop";

function Navbar({ items, logo, rightButtonHref, className, rightButton }) {
  const [collapse, setCollpase] = useState(false);

  useEffect(() => {
    function responsiveNavbar() {
      const vw = window.outerWidth;
      const threshold = 768;

      if (vw <= threshold) setCollpase(true);

      if (vw > threshold) setCollpase(false);
    }

    responsiveNavbar();

    window.addEventListener("resize", responsiveNavbar);
  }, []);

  const isTop = useIsScrollTop();

  return (
    <nav
      className={clsx(
        "firefox:bg-opacity-100 fixed top-0 z-30 flex h-20 w-screen items-center justify-between transition-all duration-300 ease-in-out",
        isTop && "border-none bg-transparent ",
        !isTop &&
          "border-b border-gray-200/50  bg-gradient-to-br from-teal-500/50 to-sky-400/50 backdrop-blur-lg "
      )}
    >
      <Container>
         <div className={"flex items-center justify-between py-6 lg:py-0"}>
          <div className={"w-[45px] md:w-[31%]"}>
            <Link className={"text-xl font-bold"} href="/">
              {logo}
            </Link>
          </div>
          <div
            className={clsx(
              "fixed top-0 flex w-2/6 flex-col bg-blue-500 px-10 py-16 transition-all md:flex md:w-64 lg:relative lg:w-10/12 lg:flex-row lg:items-center lg:bg-transparent lg:px-0 lg:py-0 rounded-bl-xl",
              collapse ? "right-[-100%]" : "right-0"
            )}
          >
            <div className={"flex w-full lg:w-8/12 lg:justify-center"}>
              {/* mobile close */}
              <button
                aria-label="Close Button"
                onClick={() => setCollpase(true)}
                className={
                  "absolute top-0 right-0 mt-8 mr-10 cursor-pointer lg:hidden"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={"w-6 text-white/75"}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </button>
              <ul
                className={
                  "-my-2 flex flex-col lg:my-0 lg:-mx-6 lg:flex-row lg:items-center"
                }
              >
                {items.map((item) => (
                  <li key={item.text}>
                    <Link
                      href={item.href}
                      className={`inline-block py-2 text-white lg:mx-6 lg:py-10 ${
                        item.active
                          ? "font-bold"
                          : "text-opacity-75 hover:text-opacity-100"
                      } transition-all`}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={
                "mt-auto flex w-full flex-col text-center lg:mt-0 lg:w-4/12 lg:flex-row lg:items-center lg:justify-end"
              }
            >
              <Button
                href={rightButtonHref}
                size="small"
                className={"mt-4 justify-center rounded lg:ml-8 lg:mt-0"}
                variant="solidBlue"
                {...rightButton}
              />
            </div>
          </div>

          {/* mobile toggler */}
          <button
            aria-label="Hamburger Button"
            onClick={() => setCollpase(false)}
            className={"ml-auto lg:hidden"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={"w-6 fill-current text-white"}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1={3} y1={12} x2={21} y2={12} />
              <line x1={3} y1={6} x2={21} y2={6} />
              <line x1={3} y1={18} x2={21} y2={18} />
            </svg>
          </button>
        </div>
      </Container>
    </nav>
  );
}

Navbar.defaultProps = {
  logo: "OSIS",
  items: [],
  rightButtonChildren: "Sign In",
  rightButtonHref: "/auth/login",
  rightButtonColor: "blue",
  className: "",
  rightButton: {},
};

Navbar.propTypes = {
  scheme: PropTypes.oneOf(["light", "dark"]),
  items: PropTypes.array,
  rightButtonChildren: PropTypes.string,
  rightButtonHref: PropTypes.string,
  rightButtonColor: PropTypes.string,
  className: PropTypes.string,
  rightButton: PropTypes.any,
  logo: PropTypes.node,
};

export default Navbar;
