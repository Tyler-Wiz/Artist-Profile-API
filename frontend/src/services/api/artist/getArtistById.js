const getArtistById = async (id) => {
  try {
    const res = await fetch(`http://localhost:4000/api/artist/${id}`, {
      next: { revalidate: 0 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default getArtistById;
