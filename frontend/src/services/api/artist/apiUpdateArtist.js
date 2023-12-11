import axios from "axios";

const apiUpdateArtist = async (url, data) => {
  try {
    const res = await axios.put(
      `http://localhost:4000/api/artist/${url}`,
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

export default apiUpdateArtist;
