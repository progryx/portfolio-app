import React from 'react';

import {
  BxlJavascriptIcon,
  BxlReactIcon,
  BxlReduxIcon,
  Css3Icon,
  GraphqlIcon,
  Html5Icon,
  LogoSassIcon,
  RestApiIcon,
  TypescriptIcon,
} from '@portfolio-app/icons';

type SkillLevelItem = {
  name: string;
  level: number;
  icon?: JSX.Element;
};

export const mySkills: SkillLevelItem[] = [
  {
    name: 'TypeScript',
    level: 98,
    icon: <TypescriptIcon />,
  },
  {
    name: 'Javascript',
    level: 95,
    icon: <BxlJavascriptIcon />,
  },
  {
    name: 'HTML',
    level: 95,
    icon: <Html5Icon />,
  },
  {
    name: 'Redux',
    level: 95,
    icon: <BxlReduxIcon />,
  },
  {
    name: 'CSS',
    level: 92,
    icon: <Css3Icon />,
  },
  {
    name: 'React',
    level: 90,
    icon: <BxlReactIcon />,
  },
  {
    name: 'LESS/SASS',
    level: 90,
    icon: <LogoSassIcon />,
  },
  {
    name: 'Rest API',
    level: 90,
    icon: <RestApiIcon />,
  },
  {
    name: 'GraphQL',
    level: 75,
    icon: <GraphqlIcon />,
  },
];
