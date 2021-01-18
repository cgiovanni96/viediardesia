const getHikePath = (name, locale) => {
  return `./hikes/${name}/${locale}.md`;
};

export default getHikePath;
