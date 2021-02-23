const getMarkdown = (path) => {
  const md = fetch(path)
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      return text;
    });

  return md;
};

export default getMarkdown;
