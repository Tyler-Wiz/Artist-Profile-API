import config from "@/services/config/config_songs";

const getAllSongs = async () => {
  const res = await fetch(`${config.SONGS_API_URL}`, {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

export default getAllSongs;
