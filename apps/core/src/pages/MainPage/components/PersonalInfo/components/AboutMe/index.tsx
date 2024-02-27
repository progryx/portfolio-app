import React from 'react';

import { Box, Typography } from '@material-ui/core';
import { Anchor } from '@src/components';
import { useLocale } from '@src/hooks';

import { AgileCatBotInfo } from '../AgileCatBotInfo';

import styles from './styles.scss';

export const AboutMe: React.FC = () => {
  const localedText = useLocale();

  return (
    <>
      <Anchor id="about" className={styles.AboutMe_anchor} />
      <Box component="div" m={1} p={1}>
        <Typography variant="body1" color="textSecondary" component="p" align="justify">
          {localedText('aboutMeText')}
        </Typography>
      </Box>
      <AgileCatBotInfo />
    </>
  );
};
