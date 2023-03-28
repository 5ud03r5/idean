import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
export default eventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const user = await serverSupabaseUser(event);
  const content = await readBody(event);
  const { data } = await client
    .from("ideas")
    .update(content)
    .eq("id", content.id)
    .select();
  return data;
});
