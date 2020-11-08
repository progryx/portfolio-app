import React from 'react';

import { Box, Divider, Grid, Typography } from '@material-ui/core';
import { Cake, LocationOn, School } from '@material-ui/icons';
import { Anchor, List, ListItem } from '@src/components';
import { useLocale } from '@src/hooks';
import dynamic from 'next/dynamic';

import styles from './styles.module.scss';

const Controls = dynamic(() => import('./Controls'), { ssr: false });

export const AboutMe: React.FC = () => {
  const localedText = useLocale();

  const aboutMeInfo: ListItem[] = [
    {
      description: localedText('birthdateText'),
      secondaryDescription: localedText('birthDateInfo'),
      listAvatar: <Cake />,
    },
    {
      description: localedText('locationText'),
      secondaryDescription: '',
      listAvatar: <LocationOn />,
    },
    {
      description: localedText('educationText'),
      secondaryDescription: localedText('educationInfo'),
      listAvatar: <School />,
    },
  ];

  return (
    <>
      <Anchor id="about" className={styles.aboutMe__anchor} />
      <Box component="div" m={1} p={1}>
        <Typography variant="body1" color="textSecondary" component="p" align="justify">
          {localedText('aboutMeText')}
        </Typography>
      </Box>
      <Divider />
      <Box component="div" m={1} p={1}>
        <Grid container alignItems="baseline">
          <Grid item xs={6}>
            <Box m={1} p={1}>
              <Typography variant="h6" color="textPrimary" component="p">
                {localedText('aboutMe')}:
              </Typography>

              <List items={aboutMeInfo} />
            </Box>
          </Grid>

          <Controls />
        </Grid>
      </Box>
    </>
  );
};
