export const formatDate = (date: string) => {
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
