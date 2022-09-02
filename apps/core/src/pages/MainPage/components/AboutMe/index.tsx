import React from 'react';

import { Box, Button, Card, CardMedia, Divider, Grid, Typography } from '@material-ui/core';
import { Cake, LocationOn, School } from '@material-ui/icons';
import { CloudDownload, ContactMailOutlined, Print } from '@material-ui/icons';
import { GithubIcon } from '@portfolio-app/icons';
import { coreSelectors } from '@reducers/core';
import { useSelector } from '@reducers/store';
import { Anchor, List, ListItem } from '@src/components';
import { DropdownMenu, MenuItem } from '@src/components/DropdownMenu';
import { contacts } from '@src/constants';
import { useLocale, useWindowSize } from '@src/hooks';
import { getAsset, getYearsFromDate } from '@src/utilities';

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

  const { isMobile, isTablet } = useWindowSize();

  const actionButtonsWidthRate = isMobile || isTablet ? 12 : 6;

  const yearsCount = getYearsFromDate(new Date(1994, 8, 4));

  const aboutMeInfo: ListItem[] = [
    {
      description: localedText('birthdateText'),
      secondaryDescription: `${localedText('birthDateInfo')}\u00A0(${yearsCount} ${
        isEnLocale ? 'y.o' : 'лет'
      })`,
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

  function AgileCatBotInfo() {
    return (
      <Box m={1} p={1}>
        <Card className={styles.aboutMe__acbCard}>
          <CardMedia component="img" image={getAsset('acb.png')} alt="Agile Cat Bot" />
          <Box
            component="div"
            m={1}
            p={1}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <Typography variant="body1" color="textSecondary" component="p" align="justify">
              {localedText('agileCatBotInfo')}
            </Typography>
            <Box component="div" display="flex">
              <Box m={1} width="100%">
                <Button
                  className={styles.aboutMe__acbButtons}
                  variant="contained"
                  color="primary"
                  startIcon={<ContactMailOutlined />}
                  target="_blank"
                  href={contacts.telegram}
                >
                  {localedText('getAcb')}
                </Button>
              </Box>
              <Box m={1} width="100%">
                <Button
                  className={styles.aboutMe__acbButtons}
                  variant="contained"
                  color="secondary"
                  startIcon={<GithubIcon />}
                  target="_blank"
                  href={`${contacts.gitHub}/AgileCatBot#agilecatbot`}
                >
                  {localedText('checkAcb')}
                </Button>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    );
  }

  return (
    <>
      <Anchor id="about" className={styles.aboutMe__anchor} />
      <Box component="div" m={1} p={1}>
        <Typography variant="body1" color="textSecondary" component="p" align="justify">
          {localedText('aboutMeText')}
        </Typography>
      </Box>
      <AgileCatBotInfo />
      <Divider />
      <Box component="div" m={1} p={1}>
        <Grid container alignItems="baseline">
          <Grid item xs={actionButtonsWidthRate}>
            <Box m={1} p={1}>
              <Typography variant="h6" color="textPrimary" component="p">
                {localedText('aboutMe')}:
              </Typography>

              <List items={aboutMeInfo} />
            </Box>
          </Grid>

          <Grid item xs={actionButtonsWidthRate}>
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
