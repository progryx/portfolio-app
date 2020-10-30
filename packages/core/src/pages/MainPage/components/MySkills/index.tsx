import React from 'react';

import { Box, Divider, Typography } from '@material-ui/core';
import { ProgressBar } from '@src/components';
import { List } from '@src/components';

import { FrontEndSkills, mySkills, WebDevelopmentSkills } from './contstants';
import styles from './styles.scss';

const SkillsList: React.FC = () => (
  <Box component="div" display="flex" flexDirection="column">
    <Typography variant="h4">My Skills</Typography>

    <Box component="div" m={1} p={1} className={styles.mySkills__skillBox}>
      <span className={styles.mySkills__skillHeader}>Web Development</span>
      <Typography>
        Website developing, SPA. Work experience with foreign clients (UpWork/oDesk) and large nies
        (Alfa Bank, VTB, Gazprom) in the Agile team.Working as IP (as a remote employee under a work
        contract (contractor)).
      </Typography>
      <Divider id={styles.divider} />
      <span className={styles.mySkills__skillSubHeader}>Main directions: </span>
      <List items={WebDevelopmentSkills} />
    </Box>

    <Box component="div" m={1} p={1} className={styles.mySkills__skillBox}>
      <span className={styles.mySkills__skillHeader}>Frontend Development</span>
      <Typography>
        Confident knowledge of modern methods and technologies of front-end development.
      </Typography>
      <Divider id={styles.divider} />
      <span className={styles.mySkills__skillSubHeader}>Main skills: </span>
      <List items={FrontEndSkills} />
    </Box>
  </Box>
);

const SkillsLevel: React.FC = () => (
  <Box component="div" display="flex" flexDirection="column">
    <Typography variant="h4">My skills level</Typography>
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

export const MySkills: React.FC = () => {
  return (
    <Box component="div" m={1} p={1}>
      <SkillsList />
      <SkillsLevel />
    </Box>
  );
};
