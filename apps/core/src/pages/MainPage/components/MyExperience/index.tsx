import React from 'react';

import WebDevelopment from '@assets/images/web_development.png';
import { Box, Grid, Typography } from '@material-ui/core';
import { List, ListItem } from '@src/components';
import { useLocale } from '@src/hooks';

import styles from './styles.scss';

export const MyExperience: React.FC = React.memo(() => {
  const localedText = useLocale();

  const WorkExperience: ListItem[] = [
    {
      description: (
        <Box>
          <Typography>
            <b>{localedText('workExperienceIpPosition')}</b>{' '}
            {localedText('workExperienceIpCompanyName')}
          </Typography>
          <Typography>{localedText('workExperienceIpYears')}</Typography>
        </Box>
      ),
      secondaryDescription: localedText('workExperienceIpDescription'),
    },
    {
      description: (
        <Box>
          <Typography>
            <b>{localedText('workExperienceMobilePosition')}</b>{' '}
            {localedText('workExperienceMobileCompanyName')}
          </Typography>
          <Typography>2017</Typography>
        </Box>
      ),
      secondaryDescription: localedText('workExperienceMobileDescription'),
    },
    {
      description: (
        <Box>
          <Typography>
            <b>{localedText('workExperiencePrivateCompanyPosition')}</b>{' '}
            {localedText('workExperiencePrivateCompanyCompanyName')}
          </Typography>
          <Typography>2016-2017</Typography>
        </Box>
      ),
      secondaryDescription: localedText('workExperiencePrivateCompanyDescription'),
    },
    {
      description: (
        <Box>
          <Typography>
            <b>{localedText('workExperienceWebStudioPosition')}</b>{' '}
            {localedText('workExperienceWebStudioCompanyName')}
          </Typography>
          <Typography>2014-2015</Typography>
        </Box>
      ),
      secondaryDescription: localedText('workExperienceWebStudioDescription'),
    },
  ];

  return (
    <Box component="div" display="flex" flexDirection="column">
      <Typography variant="h4">{localedText('myExperience')}</Typography>
      <Box m={1} p={1}>
        <Grid container alignItems="center">
          <Grid item xs={4}>
            <Box p={1}>
              <img
                src={WebDevelopment}
                alt="Web dev"
                className={styles.myExperience__webDevImage}
              />
            </Box>
            <Box p={1}>
              <Typography align="justify">{localedText('myExperienceDescription1')}</Typography>
            </Box>
            <Box p={1}>
              <Typography align="justify">{localedText('myExperienceDescription2')}</Typography>
            </Box>
            <Box p={1}>
              <Typography align="justify">{localedText('myExperienceDescription3')}</Typography>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <List items={WorkExperience} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
});
