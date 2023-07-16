export const slugCreate = (string) => {
  const slug = string.toLowerCase().replace(/[^\w]/g, "-");
  return slug;
};
