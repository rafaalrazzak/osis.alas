import toast from "react-hot-toast";
import supabase from "./supabase";

export const SubmitAuthor = async (name, job, instagram, avatar) => {
  console.log(avatar);
  const { data, error } = await supabase.from("author").insert({
    name,
    job,
    instagram,
    avatar: `https://oonjnptqlmejrjbdmkwb.supabase.co/storage/v1/object/public/${avatar}`,
  });

  if (error) {
    toast.error("Author gagal ditambahkan");
  } else {
    toast.success("Author ditambahkan");
  }

  return !error ? data : null;
};
