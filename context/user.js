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
          .select("*")
          .eq("user_id", sessionUser.id)
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

  async function signup(email, password) {
    const { error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });
    if (error) {
      toast.error("Masalah di email / pasasword kamu");
    } else {
      router.push("/");
      toast.success("Kamu berhasil register, harap konfirmasi email kamu");
    }
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
    const { error } = await await supabase.auth.api.resetPasswordForEmail(
      email, {
        redirectTo: "/dashboard/users/reset-password"
      }
    );
    if (error) {
      toast.error("Terjadi masalah");
      console.log(error);
    } else {
      toast.success("Harap cek email kamu");
    }
  }

  async function updatePass(token, password) {
    const { error } = await supabase.auth.api.resetPassword(token, password);
    if (error) {
      toast.error("Terjadi masalah");
    }
    toast.success("Password kamu berhasil diubah");
  }
  const exposed = {
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
