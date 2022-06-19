import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import supabase from "@/libs/supabase";
import { Button, Container, Link } from "@components";

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

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: supabase.auth.session(ctx),
    },
  };
}

function Navbar({ logo, rightButtonHref, className, rightButton, session }) {
  const [rbtn, setRbtn] = useState();
  useEffect(() => {
    setRbtn(rightButton);
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
      <Container className="w-full">
        <div className={"flex items-center justify-between py-6 lg:py-0"}>
          <div className={"w-4/12 md:w-6/12 "}>
            <Link className={"text-xl font-bold"} href="/">
              {logo}
            </Link>
          </div>
          <div className="flex justify-center space-x-3">
            {rbtn?.map((btn, key) => (
              <Button
                key={key}
                className={
                  "mt-0 justify-center text-center text-xs sm:text-sm md:text-base lg:ml-8 "
                }
                size="small"
                {...btn}
              />
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}

Navbar.defaultProps = {
  logo: "OSIS",
  className: "",
};

Navbar.propTypes = {
  scheme: PropTypes.oneOf(["light", "dark"]),
  items: PropTypes.array,
  rightButtonChildren: PropTypes.string,
  rightButtonHref: PropTypes.string,
  rightButtonColor: PropTypes.string,
  className: PropTypes.string,
  rightButton: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  logo: PropTypes.node,
};

export default Navbar;
