import axios from "axios";
import { toast } from "react-toastify";

const postSong = async (data) => {
  try {
    const res = await axios.post(
      `http://localhost:4000/api/songs/upload`,
      data,
      {
        withCredentials: true,
      }
    );
    return res.status;
  } catch (error) {
    console.log(error);
    toast(error.response.data.errorMessage, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

export default postSong;
