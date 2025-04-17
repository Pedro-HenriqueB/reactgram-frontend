import { api, requestConfig } from "../utils/config";

// Publish an user photo
const publishPhoto = async (data, token) => {
  try {
    const res = await fetch(api + "/photos", config)
      .then((res) => res.json())
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
