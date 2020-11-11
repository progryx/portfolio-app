import React from 'react';

import Avatar from '@assets/images/big_avatar.jpg';
import { Box, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@material-ui/core';
import { GithubIcon, GmailIcon, SkypeBusinessIcon } from '@portfolio-app/icons';
import { ContactLink } from '@src/components/ContactLink';
import { useLocale, useWindowSize } from '@src/hooks';

import { AboutMe } from '../AboutMe';

import styles from './styles.scss';

export const PersonalInfo: React.FC = () => {
  const localedText = useLocale();

  const { isMobile, isLargeMobile, isTablet, isSmallDesktop } = useWindowSize();

  const avatarBlockWidthRate =
    isMobile || isLargeMobile ? 12 : isTablet ? 10 : isSmallDesktop ? 8 : 4;

  return (
    <Grid container justify="center">
      <Grid item xs={avatarBlockWidthRate} md={4}>
        <Box component="div" m={1} p={1}>
          <Card>
            <CardMedia image={Avatar} className={styles.personalInfo__photo} />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {localedText('contactMe')}
              </Typography>

              <Divider />

              <Box component="div" m={1} p={1}>
                <ContactLink
                  contactHref="https://github.com/progryx"
                  contactText={localedText('gitHubProfile')}
                  Icon={GithubIcon}
                />
                <ContactLink
                  contactHref="mailto:progryx@gmail.com"
                  contactText={localedText('mailMe')}
                  Icon={GmailIcon}
                />
                <ContactLink
                  contactHref="https://join.skype.com/invite/oCBgwlpIzsep"
                  contactText={localedText('skypeMe')}
                  Icon={SkypeBusinessIcon}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>

      <Grid item xs={12} md={8}>
        <Box component="div" m={1} p={1}>
          <Typography variant="h4" color="primary" component="h1" id={styles.headingTitle}>
            {localedText('greetingsHeader')}
          </Typography>
        </Box>
        <Divider />
        <AboutMe />
      </Grid>
    </Grid>
  );
};
