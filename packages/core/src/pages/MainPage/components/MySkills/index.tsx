import React from 'react';

import { Box, Divider, Typography } from '@material-ui/core';
import { Security, Web as SiteIcon } from '@material-ui/icons';
import { BxlJavascriptIcon, BxlReactIcon, Html5Icon, WebpackIcon } from '@portfolio-app/icons-lib';
import { ListItem, ProgressBar } from '@src/components';
import { List } from '@src/components';
import { useLocale } from '@src/hooks';

import { mySkills } from './contstants';
import styles from './styles.scss';

const SkillsList: React.FC = React.memo(() => {
  const localedText = useLocale();

  const webDevelopmentSkills: ListItem[] = [
    {
      description: localedText('webDevelopmentSkillReact'),
      Icon: <BxlReactIcon />,
      iconClassname: styles.mySkills__skillIcon,
    },
    {
      description: localedText('webDevelopmentSkillLayout'),
      Icon: <SiteIcon fontSize="large" />,
      iconClassname: styles.mySkills__skillIcon,
    },
    {
      description: localedText('webDevelopmentSkillIS'),
      Icon: <Security fontSize="large" />,
      iconClassname: styles.mySkills__skillIcon,
    },
  ];

  const FrontEndSkills: ListItem[] = [
    {
      description: localedText('frontEndDevelopmentSkillJS'),
      Icon: <BxlJavascriptIcon />,
      iconClassname: styles.mySkills__skillIcon,
    },

    {
      description: localedText('frontEndDevelopmentSkillHTML'),
      Icon: <Html5Icon />,
      iconClassname: styles.mySkills__skillIcon,
    },

    {
      description: localedText('frontEndDevelopmentSkillWebpack'),
      Icon: <WebpackIcon />,
      iconClassname: styles.mySkills__skillIcon,
    },
  ];

  return (
    <Box component="div" display="flex" flexDirection="column">
      <Typography variant="h4">{localedText('mySkills')}</Typography>

      <Box component="div" m={1} p={1} className={styles.mySkills__skillBox}>
        <span className={styles.mySkills__skillHeader}>{localedText('webDevelopment')}: </span>
        <Typography>{localedText('webDevelopmentDescription')}</Typography>
        <Divider id={styles.divider} />
        <span className={styles.mySkills__skillSubHeader}>
          {localedText('webDevelopmentMainDirections')}
        </span>
        <List items={webDevelopmentSkills} />
      </Box>

      <Box component="div" m={1} p={1} className={styles.mySkills__skillBox}>
        <span className={styles.mySkills__skillHeader}>{localedText('frontEndDevelopment')}</span>
        <Typography>{localedText('frontEndDevelopmentDescription')}</Typography>
        <Divider id={styles.divider} />
        <span className={styles.mySkills__skillSubHeader}>
          {localedText('frontEndDevelopmentMainSkills')}:{' '}
        </span>
        <List items={FrontEndSkills} />
      </Box>
    </Box>
  );
});

const SkillsLevel: React.FC = React.memo(() => {
  const localedText = useLocale();
  return (
    <Box component="div" display="flex" flexDirection="column">
      <Typography variant="h4">{localedText('mySkillsLevel')}</Typography>
      <Box component="div" m={1} p={1} className={styles.mySkills__skillBox}>
        {mySkills
          .sort((a, b) => b.level - a.level)
          .map((skill, index) => {
            return (
              <ProgressBar key={index} Icon={skill.icon} skill={skill.name} value={skill.level} />
            );
          })}
      </Box>
    </Box>
  );
});

export const MySkills: React.FC = React.memo(() => {
  return (
    <Box component="div" m={1} p={1}>
      <SkillsList />
      <SkillsLevel />
    </Box>
  );
});
