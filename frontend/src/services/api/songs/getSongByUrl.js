const getSongByUrl = async (id) => {
  try {
    const res = await fetch(`http://localhost:4000/api/songs/${id}`, {
      next: { revalidate: 0 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getSongByUrl;
