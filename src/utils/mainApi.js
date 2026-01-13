// CRUD ops to be handled by express API later.

export const getItems = () => {
  const items = localStorage.getItem("saved-articles");
  return items ? JSON.parse(items) : [];
};

export const saveItem = (article) => {
  const currentArticles = getItems();
  const newArticles = [...currentArticles, article];
  localStorage.setItem("saved-articles", JSON.stringify(newArticles));
};

export const deleteItem = (articleToDelete) => {
  const currentArticles = getItems();
  const updatedArticles = currentArticles.filter((article) => {
    return article.url !== articleToDelete.url;
  });

  localStorage.setItem("saved-articles", JSON.stringify(updatedArticles));
};
