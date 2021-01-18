import getHikePath from "../getHikePath";
import getMarkdown from "../getMarkdown";
import metadataParser from "markdown-yaml-metadata-parser";

const getHikeInfo = async (hikeName, localeId) => {
  const path = getHikePath(hikeName, localeId);
  const mdp = metadataParser(await getMarkdown(path));

  return { content: mdp.content, metadata: mdp.metadata };
};

export default getHikeInfo;
