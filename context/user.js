import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import supabase from "@/libs/supabase";
import { toast } from "react-hot-toast";

const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(supabase.auth.user());
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getUserProfile = async () => {
      const sessionUser = supabase.auth.user();

      if (sessionUser) {
        const { data: profile } = await supabase
          .from("users")
          .select()
          .eq("email", sessionUser.email)
          .single();
        setUser({
          ...sessionUser,
          ...profile,
        });

        setIsLoading(false);
      }
    };

    getUserProfile();

    supabase.auth.onAuthStateChange(() => {
      getUserProfile();
    });
  }, []);

  useEffect(() => {
    axios.post("/api/set-supabase-cookie", {
      event: user ? "SIGNED_IN" : "SIGNED_OUT",
      session: supabase.auth.session(),
    });
  }, [user]);

  function session() {
    const [authSession, setAuthSession] = useState(null);
    supabase.auth.onAuthStateChange((evn, session) => {
      setAuthSession(session);
    });
    return authSession;
  }

  function isAuth() {
    supabase.auth.onAuthStateChange((evn, session) => {
      if (session) router.push("/");
    });
  }

  function requireAuth() {
    const { user } = useUser();

    useEffect(() => {
      if (!user) {
        router.push("/");
      }
    }, [user, router]);
  }

  async function signup(username, email, password) {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      toast.error("Masalah di email / pasasword kamu");
    } else {
      router.push("/");
      toast.success("Kamu berhasil register, harap konfirmasi email kamu");
    }

    await supabase.from("users").insert(
      {
        username,
        email,
      },
      { returning: "minimal" }
    );
  }

  async function signin(email, password) {
    const { error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });
    if (error) {
      toast.error("Masalah di email / pasasword kamu");
    } else {
      router.push("/");
      toast.success("Kamu berhasil login");
    }
  }

  async function signout() {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/");
  }

  async function resetPass(email) {
    const { error } = await supabase.auth.api.resetPasswordForEmail(email, {
      redirectTo: "/dashboard/account/reset-password",
    });
    if (error) {
      toast.error("Terjadi masalah");
      console.log(error);
    } else {
      toast.success("Harap cek email kamu");
      router.push("/");
    }
  }

  async function updatePass(token, password) {
    const { error } = await supabase.auth.api.updateUser(token, {
      password,
    });
    if (error) {
      toast.error("Terjadi masalah");
    }
    toast.success("Password kamu berhasil diubah");
  }

  const exposed = {
    session,
    isAuth,
    requireAuth,
    user,
    signup,
    signin,
    signout,
    resetPass,
    updatePass,
    isLoading,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useUser = () => useContext(Context);
export default Provider;
