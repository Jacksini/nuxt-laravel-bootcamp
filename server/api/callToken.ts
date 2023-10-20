export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event);
  const config = useRuntimeConfig();

  const data = await $fetch("http://lav.test/oauth/token", {
    method: "POST",
    body: {
      username: username,
      password: password,
      grant_type: "password",
      client_id: config.clientId,
      client_secret: config.clientSecret,
    },
  });
  return data;
});