import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";

export default eventHandler(async (event) => {
  const supabase = serverSupabaseClient(event);
  const user = await serverSupabaseUser(event);

  const { data: users, error } = await supabase
    .from("users")
    .select("name")
    .eq("id", user.id);

  if (error) return { name: "", error };
  if (users.length === 0)
    return {
      name: "",
      error:
        "No user found. Either the user does not have a record in the users table or RLS is not passed.",
    };

  const name: string = users[0].name;
  return { name, error };
});
