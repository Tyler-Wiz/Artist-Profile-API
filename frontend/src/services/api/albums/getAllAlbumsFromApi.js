const getAllAlbums = async () => {
  const res = await fetch("http://localhost:4000/api/albums/", {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

export default getAllAlbums;
