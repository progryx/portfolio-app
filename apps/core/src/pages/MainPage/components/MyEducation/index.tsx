import React from 'react';

import Education from '@assets/images/education.png';
import { Box, Grid, Typography } from '@material-ui/core';
import { Anchor, List, ListItem } from '@src/components';
import { useLocale } from '@src/hooks';

import styles from './styles.scss';

export const MyEducation: React.FC = React.memo(() => {
  const localedText = useLocale();

  const educationExperienceList: ListItem[] = [
    {
      description: (
        <Box>
          <Typography>
            <b>{localedText('myEducationUniversityFac')}</b>{' '}
            {localedText('myEducationUniversityName')}
          </Typography>
          <Typography>2015-2019</Typography>
        </Box>
      ),
      secondaryDescription: localedText('myEducationUniversityDescription'),
    },
    {
      description: (
        <Box>
          <Typography>
            <b>{localedText('myEducationUniversityFac2')}</b>{' '}
            {localedText('myEducationUniversityName')}
          </Typography>
          <Typography>2010-2014</Typography>
        </Box>
      ),
      secondaryDescription: localedText('myEducationUniversityDescription2'),
    },

    {
      description: (
        <Box>
          <Typography>
            <b>{localedText('myEducationCoursesFac')}</b> {localedText('myEducationCoursesName')}
          </Typography>
          <Typography>2008-2010</Typography>
        </Box>
      ),
    },
  ];

  return (
    <Box component="div" display="flex" flexDirection="column">
      <Anchor id="education" />
      <Typography variant="h4">{localedText('myEducation')}</Typography>
      <Box m={1} p={1}>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={12} md={8}>
            <List items={educationExperienceList} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Box p={1} display="flex" justifyContent="center">
              <img src={Education} alt="Education" className={styles.myEducation__eImage} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
});
