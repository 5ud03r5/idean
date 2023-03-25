import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
export default eventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const user = await serverSupabaseUser(event);
  const content = await readBody(event);
  const { data } = await client
    .from("profile")
    .update(content)
    .eq("id", user.id)
    .select();
  return data;
});
