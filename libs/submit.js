import toast from "react-hot-toast";
import supabase from "./supabase";

export const SubmitPost = async (from, message) => {
  const { data, error, loading } = await supabase
    .from("saran")
    .insert({ from: from, text: message }, { returning: "minimal" });

  if (error) {
    toast.error("Saran kamu gagal dikirim");
  } else if (loading) {
    toast.loading("Pengiriman saran...");
  } else {
    toast.success("Saran kamu berhasil dikirim");
  }

  return !error ? data : null;
};
