import axios from "axios";
import { toast } from "react-toastify";

const updateSong = async (url, data) => {
  try {
    const res = await axios.put(
      `http://localhost:4000/api/songs/${url}`,
      data,
      {
        withCredentials: true,
      }
    );
    return res;
  } catch (error) {
    toast(error.response.data.errorMessage);
  }
};

export default updateSong;
