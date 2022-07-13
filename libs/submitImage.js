import toast from "react-hot-toast";
import supabase from "./supabase";

export const SubmitImage = async (name, ext, image) => {
  const { data, error } = await supabase.storage
    .from("avatar")
    .upload(`author/${name}.${ext}`, image, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    toast.error("Avatar kamu gagal dikirim");
  }

  return !error ? data : null;
};
