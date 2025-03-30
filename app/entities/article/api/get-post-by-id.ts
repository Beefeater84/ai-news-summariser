export const getPostById = async (id: string) => {
  const res = await fetch(`http://localhost:4000/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};
