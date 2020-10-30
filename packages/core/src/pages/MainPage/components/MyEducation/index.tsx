import React from 'react';

import Education from '@assets/images/education.png';
import { Box, Grid, Typography } from '@material-ui/core';
import { List, ListItem } from '@src/components';

import styles from './styles.scss';

const educationExperienceList: ListItem[] = [
  {
    description: (
      <Box>
        <Typography>
          <b>Secure Information Technologies</b> ITMO University, Russia
        </Typography>
        <Typography>2015-2019</Typography>
      </Box>
    ),
    secondaryDescription:
      'Diploma topic: Development of a secure information environment for a commercial company',
  },
  {
    description: (
      <Box>
        <Typography>
          <b>Software for Computer Hardware and Automated Systems</b> ITMO University, Russia.
        </Typography>
        <Typography>2010-2014</Typography>
      </Box>
    ),
    secondaryDescription:
      'Diploma topic: Development of a software module for cataloging educational materials for university educational environment',
  },

  {
    description: (
      <Box>
        <Typography>
          <b>Pre-profile training courses</b> SEGRIS Institute of Information Technologies, Russia.
        </Typography>
        <Typography>2008-2010</Typography>
      </Box>
    ),
  },
];

export const MyEducation: React.FC = () => {
  return (
    <Box component="div" display="flex" flexDirection="column">
      <Typography variant="h4">My Education</Typography>
      <Box m={1} p={1}>
        <Grid container>
          <Grid item xs={8}>
            <List items={educationExperienceList} />
          </Grid>
          <Grid item xs={4} alignItems="center">
            <Box p={1}>
              <img src={Education} alt="Web dev" className={styles.myEducation__eImage} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
