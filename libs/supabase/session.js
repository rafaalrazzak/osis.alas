import supabase from ".";

export default function session() {
  return supabase.auth.session();
}
