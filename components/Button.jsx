import PropTypes from "prop-types";
import Link from "./Link";

function Button({
  tagName,
  href,
  children,
  size,
  wide,
  variant,
  className: addClassName,
  leftIcon,
  leftIconClassName,
  external,
  ...props
}) {
  const baseClass = `
        inline-flex
        font-bold
        border-2  
        rounded-lg
        transition-all
    `;

  const sizes = {
    xs: "text-xs p-1",
    small: "text-sm py-2 px-3",
    normal: "px-6 py-3",
  };

  const variants = {
    solidBlue: "text-white bg-blue-500 hover:bg-blue-600 border-transparent",
    solidRed: "text-white bg-red-500 hover:bg-red-600 border-transparent",
    solidYellow:
      "text-white bg-yellow-500 hover:bg-yellow-600 border-transparent",
    lightBlue: "text-blue-900 bg-blue-300 hover:bg-blue-200 border-transparent",
    outlineBlue:
      "text-primary-100 hover:text-white bg-transparent border-primary-100 hover:border-transparent hover:bg-primary-600/60",
    lightOpacity:
      "text-white bg-blue-600/30 hover:bg-blue-400/70 border-transparent",
  };

  const wideClassName = "flex w-full justify-center items-center";

  const className = `${baseClass} ${sizes[size]} ${variants[variant]} ${
    wide ? wideClassName : ""
  } ${addClassName}`;

  return (
    <>
      {external ? (
        <a
          className={className}
          href={href}
          {...props}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      ) : tagName === "a" || href ? (
        <Link
          className={`${className} transition-all duration-300 ease-in-out`}
          href={href}
          {...props}
        >
          {children}
        </Link>
      ) : (
        <button
          className={`${className} transition-all duration-300 ease-in-out`}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
}

Button.defaultProps = {
  size: "normal",
  className: "",
  tagName: "button",
  wide: false,
  variant: "solid",
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "normal"]),
  href: PropTypes.string,
  tagName: PropTypes.oneOf(["link", "button"]),
  wide: PropTypes.bool,
  variant: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  external: PropTypes.bool,
};

export default Button;
