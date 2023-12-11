const getSongsByArtist = async (id) => {
  const res = await fetch(`http://localhost:4000/api/songs/all/${id}`, {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

export default getSongsByArtist;
