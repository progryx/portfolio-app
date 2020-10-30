import React from 'react';

import { Security, Web as SiteIcon } from '@material-ui/icons';
import {
  BxlJavascriptIcon,
  BxlReactIcon,
  BxlReduxIcon,
  Css3Icon,
  GraphqlIcon,
  Html5Icon,
  LogoSassIcon,
  RestApiIcon,
  WebpackIcon,
} from '@portfolio-app/icons-lib';
import { ListItem } from '@src/components';

import styles from './styles.scss';

type SkillLevelItem = {
  name: string;
  level: number;
  icon?: JSX.Element;
};

export const mySkills: SkillLevelItem[] = [
  {
    name: 'HTML',
    level: 95,
    icon: <Html5Icon />,
  },
  {
    name: 'CSS',
    level: 92,
    icon: <Css3Icon />,
  },
  {
    name: 'Javascript',
    level: 95,
    icon: <BxlJavascriptIcon />,
  },
  {
    name: 'React',
    level: 90,
    icon: <BxlReactIcon />,
  },
  {
    name: 'Redux',
    level: 95,
    icon: <BxlReduxIcon />,
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

export const WebDevelopmentSkills: ListItem[] = [
  {
    description:
      'Development on React + Redux (SPA), Experience 2 years. (over 8 huge apps implemented)',
    Icon: <BxlReactIcon />,
    iconClassname: styles.mySkills__skillIcon,
  },
  {
    description:
      'Website development on HTML5 / CSS3 / JavaScript + CMS WordPress / Joomla / Drupal / Bitrix from scratch.',
    Icon: <SiteIcon fontSize="large" />,
    iconClassname: styles.mySkills__skillIcon,
  },
  {
    description: 'Development of enterprise security systems, threat analysis.',
    Icon: <Security fontSize="large" />,
    iconClassname: styles.mySkills__skillIcon,
  },
];

export const FrontEndSkills: ListItem[] = [
  {
    description:
      'JavaScript with modern specifications ES6-ES10, React, Redux (FLUX) + Async libs Saga/Thunk',
    Icon: <BxlJavascriptIcon />,
    iconClassname: styles.mySkills__skillIcon,
  },

  {
    description: 'Advanced Layout: HTML, CSS with preprocessors (LESS / SASS)',
    Icon: <Html5Icon />,
    iconClassname: styles.mySkills__skillIcon,
  },

  {
    description:
      'Modern project assembly methods. WebPack 4/5 (with Module Federation) and experience with large monorepo (over 15+ projects with libs and assets)',
    Icon: <WebpackIcon />,
    iconClassname: styles.mySkills__skillIcon,
  },
];
