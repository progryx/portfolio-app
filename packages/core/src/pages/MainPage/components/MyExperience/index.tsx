import React from 'react';

import WebDevelopment from '@assets/images/web_development.png';
import { Box, Grid, Typography } from '@material-ui/core';
import { List, ListItem } from '@src/components';

import styles from './styles.scss';

const WorkExperience: ListItem[] = [
  {
    description: (
      <Box>
        <Typography>
          <b>Frontend Web Developer</b> Individual entrepreneur Nikitin G.N.
        </Typography>
        <Typography>2017-Present time</Typography>
      </Box>
    ),
    secondaryDescription:
      'Website developing, SPA. Work experience with foreign clients (UpWork/oDesk) and large companies (Alfa Bank, VTB, Gazprom) in the Agile team. Working as IP (as a remote employee under a work contract (contractor))',
  },
  {
    description: (
      <Box>
        <Typography>
          <b>Mobile Web Developer</b> SHIFT Motors.
        </Typography>
        <Typography>2017</Typography>
      </Box>
    ),
    secondaryDescription:
      'Development of a company website (html / php / javascript), participation in a startup: developing android application. Application topic: Security alarm button for private guard company. GPS tracking of rapid response team. Stack in Frontend: knockout, html5,css3, less.',
  },
  {
    description: (
      <Box>
        <Typography>
          <b>Web Developer</b> iLocked inc.
        </Typography>
        <Typography>2016-2017</Typography>
      </Box>
    ),
    secondaryDescription:
      'Development, promotion and those. Support for the companys website and franchise projects. Development of a high-load project under a private CMS. Developing a website, contains all quests and quest companies around the country with ability to booking different quests. Stack: private cms(php/js) + HTML5/CSS3 (Less)',
  },
  {
    description: (
      <Box>
        <Typography>
          <b>Web Master</b> Exa-Media Web studio
        </Typography>
        <Typography>2014-2015</Typography>
      </Box>
    ),
    secondaryDescription:
      'Development, refinement, configuration and technical support of sites (HTML5, javascript, php) users on various CMS.',
  },
];

export const MyExperience: React.FC = () => {
  return (
    <Box component="div" display="flex" flexDirection="column">
      <Typography variant="h4">My Experience</Typography>
      <Box m={1} p={1}>
        <Grid container>
          <Grid item xs={4} alignItems="center">
            <Box p={1}>
              <img
                src={WebDevelopment}
                alt="Web dev"
                className={styles.myExperience__webDevImage}
              />
            </Box>
            <Box p={1}>
              <Typography align="justify">
                I have been doing commercial development for over 6 years. I started by creating
                websites from scratch in web studios in 2014.
              </Typography>
            </Box>
            <Box p={1}>
              <Typography align="justify">
                For the last year i have been working with large companies in international projects
                (VTB, Gazprom, Alfa Bank) in the development team.
              </Typography>
            </Box>
            <Box p={1}>
              <Typography align="justify">
                I'm working only under a work contract as an individual entrepreneur.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <List items={WorkExperience} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
