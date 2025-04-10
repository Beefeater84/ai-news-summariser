export const listPosts = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
    if (!res.ok) {
      throw new Error("Can't fetch posts");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
