import axios from "axios";

const UpdateAlbumToApi = async (url, data) => {
  try {
    const res = await axios.put(
      `http://localhost:4000/api/albums/${url}`,
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

export default UpdateAlbumToApi;
