import React from 'react';

import { Box, Button, Divider, Grid, Typography } from '@material-ui/core';
import { Cake, LocationOn, School } from '@material-ui/icons';
import { CloudDownload, Print } from '@material-ui/icons';
import { coreSelectors } from '@reducers/core';
import { useSelector } from '@reducers/store';
import { Anchor, List, ListItem } from '@src/components';
import { DropdownMenu, MenuItem } from '@src/components/DropdownMenu';
import { useLocale } from '@src/hooks';

import { downloadCV, printCV } from './helpers';
import styles from './styles.scss';

const downloadEngCvItems: MenuItem[] = [
  {
    description: 'Microsoft Word (.doc)',
    handleClickItem: () => downloadCV('EN', 'doc'),
  },
  {
    description: 'Microsoft Word (.rtf)',
    handleClickItem: () => downloadCV('EN', 'rtf'),
  },
  {
    description: 'Adobe Reader (.pdf)',
    handleClickItem: () => downloadCV('EN', 'pdf'),
  },
];

const downloadRuCvItems: MenuItem[] = [
  {
    description: 'Microsoft Word (.doc)',
    handleClickItem: () => downloadCV('RU', 'doc'),
  },
  {
    description: 'Microsoft Word (.rtf)',
    handleClickItem: () => downloadCV('RU', 'rtf'),
  },
  {
    description: 'Adobe Reader (.pdf)',
    handleClickItem: () => downloadCV('RU', 'pdf'),
  },
];

export const AboutMe: React.FC = () => {
  const localedText = useLocale();
  const isEnLocale = useSelector(coreSelectors.isEnLanguage);

  const aboutMeInfo: ListItem[] = [
    {
      description: localedText('birthdateText'),
      secondaryDescription: localedText('birthDateInfo'),
      listAvatar: <Cake />,
    },
    {
      description: localedText('locationText'),
      secondaryDescription: localedText('locationPlace'),
      listAvatar: <LocationOn />,
    },
    {
      description: localedText('educationText'),
      secondaryDescription: localedText('educationInfo'),
      listAvatar: <School />,
    },
  ];

  const printCvHandler = () => {
    printCV(isEnLocale ? 'EN' : 'RU');
  };

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

          <Grid item xs={6}>
            <Box m={1} p={1}>
              <DropdownMenu
                items={isEnLocale ? downloadEngCvItems : downloadRuCvItems}
                linkMenuText={localedText('downloadMyCv')}
                buttonColor="secondary"
                buttonIcon={<CloudDownload />}
                buttonSize="large"
                buttonClassName={styles.aboutMe__buttons}
              />
              <Box m={1} p={1}>
                <Button
                  variant="contained"
                  className={styles.aboutMe__buttons}
                  color="default"
                  startIcon={<Print />}
                  onClick={printCvHandler}
                >
                  {localedText('printMyCv')}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
