import config from "@/services/config/config_songs";

const getAllSongs = async () => {
  try {
    const res = await fetch(`${config.SONGS_API_URL}`, {
      next: { revalidate: 0 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllSongs;
