export const getPostById = async (id: string) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/posts/${id}`);
    if (!res.ok) {
      throw new Error("Can't fetch post");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};
