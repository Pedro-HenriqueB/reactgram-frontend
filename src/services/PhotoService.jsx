import { api, requestConfig } from "../utils/config";

// Publish an user photo
const publishPhoto = async (data, token) => {
  const config = requestConfig("POST", data, token);
  try {
    const res = await fetch(api + "/photos", config)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

const photoService = {
  publishPhoto,
};

export default photoService;
