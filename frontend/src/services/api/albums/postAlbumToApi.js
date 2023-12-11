import axios from "axios";

const postAlbumToApi = async (data) => {
  try {
    const res = await axios.post(
      `http://localhost:4000/api/albums/upload`,
      data,
      {
        withCredentials: true,
      }
    );
    if (res) return "OK";
  } catch (error) {
    return error.response.data.errorMessage;
  }
};

export default postAlbumToApi;
