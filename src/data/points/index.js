import camping from "./camping";
import cave from "./cave";
import chapel from "./chapel";
import church from "./church";
import flora from "./flora";
import gardening from "./gardening";
import harbour from "./harbour";
import misc from "./library";
import monument from "./monument";
import pharmacy from "./pharmacy";
import resistance from "./resistance";
import trainStation from "./train-station";
import view from "./view";
import cave2 from "./cave2";
import drinking from "./drinking";
import hospital from "./hospital";
import redcross from "./redcross";
import firefighter from "./firefighter";
import iat from "./iat";
import busStation from "./busStation";

const points = [
  ...camping,
  ...cave,
  ...chapel,
  ...church,
  ...flora,
  ...gardening,
  ...harbour,
  ...monument,
  ...pharmacy,
  ...resistance,
  ...trainStation,
  ...misc,
  ...view,
  ...cave2,
];

export const pointsByCategories = [
  {
    id: 1,
    name: {
      it: "Ardesia",
      eng: "Salte",
    },
    legend: ["cave", "gardening", "mill"],
    points: [...cave, ...cave2, ...gardening], //mill
  },
  {
    id: 2,
    name: {
      it: "Cultura",
      eng: "Culture",
    },
    legend: ["church", "chapel", "monument", "resistance"],
    points: [...church, ...chapel, ...monument, ...resistance],
  },

  {
    id: 3,
    name: {
      it: "Natura",
      eng: "Nature",
    },
    legend: ["view", "fauna", "flora"],
    points: [
      ...view,
      //fauna
      ...flora,
    ],
  },

  {
    id: 4,
    name: {
      it: "Emergenza",
      eng: "Emergency",
    },
    legend: ["hospital", "pharmacy", "redcross", "firefighter"],
    points: [...hospital, ...pharmacy, ...redcross, ...firefighter],
  },

  {
    id: 5,
    name: {
      it: "Info",
      eng: "Info",
    },
    legend: [
      "iat",
      "trainstation",
      "bus",
      "harbour",
      "drinking",
      "cicle",
      "sentiero",
      "picnic",
      "camping",
    ],
    points: [
      ...iat,
      ...trainStation,
      ...busStation,
      ...harbour,
      ...drinking,
      //cicle
      //sentieroliguria
      //picnic
      ...camping,
    ],
  },
];

// const onlyCave2 = [...cave2];

// export default onlyCave2;
export default points;
