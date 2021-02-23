import Italian from "../languages/it-IT.json";
import English from "../languages/en-US.json";

const getLocalMessages = (id) => {
  return id === "it" ? Italian : English;
};

export default getLocalMessages;
