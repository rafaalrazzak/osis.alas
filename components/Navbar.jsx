import { Button, Container, Link } from "@components";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

function Navbar({ logo, rightButtonHref, className, rightButton }) {
  

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full h-20 items-center justify-center flex z-50",
        className
      )}
    >
      <Container>
        <div className={"flex items-center justify-between lg:py-0 py-6"}>
          <div className={"w-3/12"}>
            <Link className={"text-xl font-bold"} href="/">{logo}</Link>
          </div>
          <Button
            href={rightButtonHref}
            size="small"
            className={"rounded lg:ml-8 justify-center mt-0 "}
            variant="solidBlue"
            {...rightButton}
          />
        </div>
      </Container>
    </nav>
  );
}

Navbar.defaultProps = {
  logo: "OSIS",
  items: [],
  rightButtonChildren: "Kirim Pesan",
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
