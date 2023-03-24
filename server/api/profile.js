import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
export default eventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const user = await serverSupabaseUser(event);
  const { data } = await client
    .from("profile")
    .select("*")
    .eq("id", user.id)
    .single();
  return data;
});
