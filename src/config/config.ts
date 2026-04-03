import type {
  PersonalConfig,
  Project,
  Experience,
  SkillCategory,
  NavLink,
} from "./types";

import personalData from "./personal.json";
import projectsData from "./projects.json";
import experienceData from "./experience.json";
import skillsData from "./skills.json";
import navigationData from "./navigation.json";

export const personalConfig: PersonalConfig = personalData;
export const projectsConfig: Project[] = projectsData;
export const experienceConfig: Experience[] = experienceData;
export const skillsConfig: SkillCategory[] = skillsData;
export const navConfig: NavLink[] = navigationData;

// Inguva_SatyaVenkata_Sai_Kumar_Resume