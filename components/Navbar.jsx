import { Button, Container, Link } from "@components";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

function useIsScrollTop() {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    function onScroll() {
      setIsTop(window.scrollY <= 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return isTop;
}

function Navbar({ logo, rightButtonHref, className, rightButton }) {
  const isTop = useIsScrollTop();
  return (
    <nav
      className={`fixed  w-full h-20 items-center justify-center flex transition duration-300 ease-in-out ${
        isTop
          ? "border-none bg-transparent"
          : "bg-gradient-to-br from-teal-500/50 to-sky-400/50 border-b border-gray-200 "
      } top-0 z-30 flex items-center justify-between backdrop-blur-lg firefox:bg-opacity-100 `}
    >
      <Container>
        <div className={"flex items-center justify-between lg:py-0 py-6"}>
          <div className={"w-4/12 md:w=6/12 "}>
            <Link className={"text-xl font-bold"} href="/">
              {logo}
            </Link>
          </div>
          <div className="flex space-x-4 w-8/12 justify-end">
            <Button
            href={rightButtonHref}
            className={"text-center text-xs sm:text-sm md:text-base lg:ml-8 justify-center mt-0 "}
            size="small"
            variant="solidBlue"
            {...rightButton}
          />
          <Button
            variant="solidYellow"
            size="small"
            href="/auth/signin"
            className="text-center text-xs sm:text-sm md:text-base lg:ml-8 justify-center mt-0"
          >
             Sign In
          </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

Navbar.defaultProps = {
  logo: "OSIS",
  items: [],
  rightButtonChildren: "Kirim Saran",
  rightButtonHref: "/",
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
  rightButton: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  logo: PropTypes.node,
};

export default Navbar;
