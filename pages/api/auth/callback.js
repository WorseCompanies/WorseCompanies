import got from "got";
import FormData from "form-data";

export default async function handler(req, res) {
  const { code } = JSON.parse(req.body);

  const CLIENT_ID = process.env.CLIENT_ID;
  const CALLBACK_URL = process.env.CALLBACK_URL;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;

  // const formData = new FormData();
  // formData.append("code", code);
  // formData.append("grant_type", "authorization_code");
  // formData.append("client_id", CLIENT_ID);
  // formData.append("client_secret", CLIENT_SECRET);
  // formData.append("redirect_uri", CALLBACK_URL);

  const formData = new URLSearchParams();
  formData.append("code", code);
  formData.append("grant_type", "authorization_code");
  formData.append("client_id", CLIENT_ID);
  formData.append("client_secret", CLIENT_SECRET);
  formData.append("redirect_uri", CALLBACK_URL);

  console.log(formData);

  try {
    const response = await got.post(
      `https://www.linkedin.com/oauth/v2/accessToken?${formData.toString()}`
      // { formData }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
