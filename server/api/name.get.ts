import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event: any) => {
  const user = await serverSupabaseUser(event);
  if (!user)
    throw createError({ message: "user not logged in", statusCode: 401 });

  const supabase = serverSupabaseClient(event);

  const { data: userRecord, error } = await supabase
    .from("users")
    .select("name")
    .eq("id", user.id)
    .single();

  if (error) throw createError({ message: error.message, statusCode: 500 });

  if (!userRecord)
    throw createError({
      message: "name is empty for some reason",
      statusCode: 500,
    });

  return { name: userRecord.name };
});
