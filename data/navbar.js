import href from "./href";

const signin = {
  variant: "solidBlue",
  children: "Sign In",
  href: href.signin,
};
const signout = {
  variant: "solidRed",
  children: "Sign Out",
  href: href.signout,
};

const rightButtonData = () => {
  return [signin, signout];
};

export default rightButtonData