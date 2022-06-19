import supabase from "@/libs/supabase";

const kirim = {
  variant: "solidYellow",
  children: "Kirim Saran",
  href: "/kirim",
};
const signin = {
  variant: "solidBlue",
  children: "Sign In",
  href: "/auth/signin",
};
const signout = {
  variant: "solidRed",
  children: "Sign Out",
  href: "/auth/signout",
};

export function rightButtonData() {
  const session = supabase.auth.session();
  const btnSession = session ? signout : signin;

  return [kirim, btnSession];
}
