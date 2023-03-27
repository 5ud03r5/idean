import { serverSupabaseClient } from "#supabase/server";
export default eventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const { search } = getQuery(event);
  if (search) {
    const { data } = await client
      .from("ideas")
      .select()
      .like("title", `%${search}%`);
    return data;
  }
  const { data } = await client.from("ideas").select(`*, idea_owner(name, id)`);

  return data;
});
