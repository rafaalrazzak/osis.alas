import toast from "react-hot-toast";
import supabase from "./supabase";

export const SubmitPost = async (from, message) => {
  const { data, error, loading } = await supabase
    .from("saran")
    .insert([{ from: from, text: message }]);

  if (error) {
    toast.error("Pesanmu gagal dikirim");
    console.log(error.message);
  } else if (loading) {
    toast.loading("Pengiriman pesan...");
  } else {
    toast.success("Pesanmu berhasil dikirim");
  }

  return !error ? data : null;
};
