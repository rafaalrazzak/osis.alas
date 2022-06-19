import supabase from ".";

export default async function fetch() {
  const { data, error, loading } = await supabase.from("saran").select();
  if (error) return console.log(error);
  if (loading) return <div>Loading... </div>;
  return !error ? data : null;
}
