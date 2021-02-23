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
      it: "Categoria 1",
      eng: "Category 1",
    },
    legend: ["view", "church", "chapel", "mill", "fauna", "flora", "monument"],
    points: [
      ...view,
      ...church,
      ...chapel,
      //mill,
      //fauna
      ...flora,
      ...monument,
    ],
  },

  {
    id: 2,
    name: {
      it: "Categoria 2",
      eng: "Category 2",
    },
    legend: ["cave", "gardening"],
    points: [...cave, ...cave2, ...gardening],
  },

  {
    id: 3,
    name: {
      it: "Categoria 3",
      eng: "Category 3",
    },
    legend: ["resistance"],
    points: [...resistance],
  },

  {
    id: 4,
    name: {
      it: "Categoria 4",
      eng: "Category 4",
    },
    legend: ["drinking", "cicle", "sentiero", "picnic", "camping"],
    points: [
      ...drinking,
      //cicle
      //sentieroliguria
      //picnic
      ...camping,
    ],
  },

  {
    id: 5,
    name: {
      it: "Categoria 5",
      eng: "Category 5",
    },
    legend: ["hospital", "pharmacy", "redcross", "firefighter"],
    points: [...hospital, ...pharmacy, ...redcross, ...firefighter],
  },

  {
    id: 6,
    name: {
      it: "Categoria 6",
      eng: "Category 6",
    },
    legend: ["iat", "trainstation", "bus", "harbour"],
    points: [...iat, ...trainStation, ...busStation, ...harbour],
  },
];

// const onlyCave2 = [...cave2];

// export default onlyCave2;
export default points;
