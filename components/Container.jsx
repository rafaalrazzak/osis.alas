import clsx from "clsx";
import PropTypes from "prop-types";

function Container({ className, children, ...props }) {
  return (
    <div
      className={clsx(
        "xl:w-12/12 mx-auto px-12 lg:px-10 2xl:w-8/12",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
