import axios from "axios";
import { toast } from "react-toastify";

const deleteById = async (id, SERVER_URL) => {
  try {
    const res = await axios.delete(`${SERVER_URL}${id}`, {
      withCredentials: true,
    });
    if (res.data) {
      router.refresh();
    }
  } catch (error) {
    toast(error.response.data.errorMessage);
  }
};

export default deleteById;
