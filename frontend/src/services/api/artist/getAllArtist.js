import config from "@/services/config/config_artist";

const getAllArtist = async () => {
  try {
    const res = await fetch(`${config.ARTIST_API_URL}`, {
      next: { revalidate: 0 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllArtist;
