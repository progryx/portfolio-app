import React from 'react';

import { Box, Divider, Grid, Typography } from '@material-ui/core';
import { Cake, LocationOn, School } from '@material-ui/icons';
import { CloudDownload, Print } from '@material-ui/icons';
import { ContactForm, List, ListItem } from '@src/components';
import { DropdownMenu, MenuItem } from '@src/components/DropdownMenu';

import { downloadCV, printCV } from './helpers';
import styles from './styles.scss';

const aboutMeInfo: ListItem[] = [
  {
    description: 'Birthdate',
    secondaryDescription: 'Aug 4, 1994 (26 y.o)',
    listAvatar: <Cake />,
  },
  {
    description: 'Location',
    secondaryDescription: 'Saint-Petersburg, Russia',
    listAvatar: <LocationOn />,
  },
  {
    description: 'Education',
    secondaryDescription: 'ITMO University, Russia, 2010-2019',
    listAvatar: <School />,
  },
];

const downloadEngCvItems: MenuItem[] = [
  {
    description: 'Microsoft Word (.doc)',
    handleClickItem: () => downloadCV('en', 'doc'),
  },
  {
    description: 'Microsoft Word (.rtf)',
    handleClickItem: () => downloadCV('en', 'rtf'),
  },
  {
    description: 'Adobe Reader (.pdf)',
    handleClickItem: () => downloadCV('en', 'pdf'),
  },
];

const printCVItems: MenuItem[] = [
  {
    description: 'In English',
    handleClickItem: () => printCV('en'),
  },
  {
    description: 'На русском',
    handleClickItem: () => printCV('ru'),
  },
];

// const ruCvData: MenuItem[] = [
//   {
//     description: 'Microsoft Word (.doc)',
//     handleClickItem: () => downloadCV('ru', 'doc'),
//   },
//   {
//     description: 'Microsoft Word (.rtf)',
//     handleClickItem: () => downloadCV('ru', 'rtf'),
//   },
//   {
//     description: 'Adobe Reader (.pdf)',
//     handleClickItem: () => downloadCV('ru', 'pdf'),
//   },
// ];

export const AboutMe: React.FC = () => {
  return (
    <>
      <Box component="div" m={1} p={1}>
        <Typography variant="body1" color="textSecondary" component="p" align="justify">
          Hello and welcome to my personal portfolio application! <br /> My name's German and i'm
          middle frontend developer.This is microservice based monorepo application! You can browse
          source code of this app on my GitHub account.
          <br />
          Here you can read about me and my experience and contact with me if you want. Also you can
          download my CV with button below. <br />
          I'll appriciate for your attention to my CV! Have a nice day!
        </Typography>
      </Box>
      <Divider />
      <Box component="div" m={1} p={1}>
        <Grid container alignItems="baseline">
          <Grid item xs={5}>
            <Box m={1} p={1}>
              <Typography variant="h6" color="textPrimary" component="p">
                About me:
              </Typography>

              <List items={aboutMeInfo} />
            </Box>
            <DropdownMenu
              items={downloadEngCvItems}
              linkMenuText="Download my CV"
              buttonColor="secondary"
              buttonIcon={<CloudDownload />}
              buttonSize="large"
              buttonClassName={styles.aboutMe__buttons}
            />
            <DropdownMenu
              items={printCVItems}
              linkMenuText="Print my CV"
              buttonColor="default"
              buttonIcon={<Print />}
              buttonSize="large"
              buttonClassName={styles.aboutMe__buttons}
            />
          </Grid>

          <Grid item xs={7}>
            <ContactForm
              withSpacings={false}
              formHeading="Contact me if you want!"
              formHeadingType="h6"
              formLaylout="inline"
              messageRows={4}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
