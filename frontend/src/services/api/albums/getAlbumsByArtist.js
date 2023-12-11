const getAlbumsByArtist = async (id) => {
  const res = await fetch(`http://localhost:4000/api/albums/artist/${id}`, {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

export default getAlbumsByArtist;
