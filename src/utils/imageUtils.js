// Helper function to construct image paths with PUBLIC_URL
export const getImagePath = (relativePath) => {
  return `${process.env.PUBLIC_URL}/${relativePath}`;
};
