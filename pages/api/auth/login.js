export default async function handler(req, res) {
  const CLIENT_ID = process.env.CLIENT_ID;
  const CALLBACK_URL = process.env.CALLBACK_URL;
  const STATE = process.env.STATE;

  return res.redirect(
    `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URL}&scope=r_liteprofile`
  );
}
