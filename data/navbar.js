import supabase from "@/libs/supabase";
import href from "./href";

const kirim = {
  variant: "solidYellow",
  children: "Kirim Saran",
  href: href.kirim,
};
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

export function rightButtonData() {
  const session = supabase.auth.session();
  const btnSession = session ? signout : signin;

  return [kirim, btnSession];
}
