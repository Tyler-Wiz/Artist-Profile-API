import axios from "axios";

const postArtist = async (data) => {
  try {
    const res = await axios.post(
      `http://localhost:4000/api/artist/upload`,
      data,
      {
        withCredentials: true,
      }
    );
    if (res) return "OK";
  } catch (error) {
    console.log(error);
    // return error.response.data.errorMessage;
  }
};

export default postArtist;
