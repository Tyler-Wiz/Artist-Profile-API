import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const deleteById = async (id, SERVER_URL) => {
  const router = useRouter();
  try {
    const res = await axios.delete(`${SERVER_URL}${id}`, {
      withCredentials: true,
    });
    if (res.data) {
      router.refresh();
    }
  } catch (error) {
    console.log(error);
    // toast(error.response.data.errorMessage);
  }
};

export default deleteById;
