import { serverSupabaseClient } from "#supabase/server";
export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);

  const { title, lf_help, lf_dev, dev_started, github, idea_owner } =
    await readBody(event);
  const { data } = await client.from("ideas").upsert({
    title: title,
    idea_owner: idea_owner,
    github: github,
    lf_help: lf_help,
    lf_dev: lf_dev,
    dev_started: dev_started,
  });

  return { ideas: data };
});
