import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
export default eventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const { search } = getQuery(event);
  const user = await serverSupabaseUser(event);
  if (search) {
    const { data } = await client
      .from("ideas")
      .select()
      .like("title", `%${search}%`);
    return data;
  }
  const { data } = await client
    .from("ideas")
    .select()
    .eq("idea_owner", user.id);
  return data;
});
