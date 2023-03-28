import { serverSupabaseClient } from "#supabase/server";
export default eventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const { search } = getQuery(event);
  if (search) {
    const { data } = await client
      .from("ideas")
      .select(`*, idea_owner(name, id)`)
      .ilike("title", `%${search}%`)
      .order("created_at", { ascending: false });
    return data;
  }

  const { data } = await client
    .from("ideas")
    .select(`*, idea_owner(name, id)`)
    .order("created_at", { ascending: false });

  return data;
});
