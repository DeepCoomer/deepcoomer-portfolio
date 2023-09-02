import JavaIcon from '../components/MyIcons'
import {
  BrandCpp,
  BrandCss3,
  BrandDjango,
  BrandHtml5,
  BrandJavascript,
  BrandMongodb,
  BrandMysql,
  BrandPython,
  BrandReact,
  BrandTypescript,
  BrandVite,
} from "tabler-icons-react";

import { IconBrandNodejs } from "@tabler/icons-react";
// import { useViewportSize } from "@mantine/hooks";

// const { width } = useViewportSize();
export const HTML5 = {
  name: "HTML5",
  icon: <BrandHtml5 size={140} color="orange" />,
};
export const CSS3 = {
  name: "CSS3",
  icon: <BrandCss3 size={140} color="blue" />,
};
export const JS = {
  name: "JavaScript",
  icon: <BrandJavascript size={140} color="yellow" />,
};
export const TS = {
  name: "TypeScript",
  icon: <BrandTypescript size={140} color="blue" />,
};
export const ReactJs = {
  name: "React Js",
  icon: <BrandReact size={140} color="skyblue" />,
};
export const Vite = {
  name: "Vite",
  icon: <BrandVite size={140} color="blueviolet" />,
};
export const NODEJS = {
  name: "Node Js",
  icon: <IconBrandNodejs size={140} color="green" />,
};
export const MongoDB = {
  name: "MongoDB",
  icon: <BrandMongodb size={140} color="green" />,
};
export const SQL = {
  name: "SQL",
  icon: <BrandMysql size={140} color="yellow" />,
};
export const PYTHON = {
  name: "Python",
  icon: <BrandPython size={140} color="lightblue" />,
};
export const DJANGO = {
  name: "Django",
  icon: <BrandDjango size={140} color="darkgreen" />,
};
export const CPP = {
  name: "C++",
  icon: <BrandCpp size={140} color="darkblue" />,
};

export const JAVA = {
  name: "Java",
  icon: <JavaIcon />,
};
