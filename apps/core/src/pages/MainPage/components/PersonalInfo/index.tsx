import React from 'react';

import { Box, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@material-ui/core';
import { GithubIcon, GmailIcon, TelegramIcon, VKIcon } from '@portfolio-app/icons';
import { ContactLink } from '@src/components/ContactLink';
import { contacts } from '@src/constants';
import { useLocale, useWindowSize } from '@src/hooks';
import { getAsset } from '@src/utilities';

import { AboutMe } from '../AboutMe';

import styles from './styles.scss';

export const PersonalInfo: React.FC = () => {
  const localedText = useLocale();

  const { isMobile, isLargeMobile, isTablet, isSmallDesktop } = useWindowSize();

  const avatarBlockWidthRate = isMobile || isLargeMobile ? 12 : isTablet ? 10 : isSmallDesktop ? 8 : 4;

  return (
    <Grid container justify="center">
      <Grid item xs={avatarBlockWidthRate} md={4}>
        <Box component="div" m={1} p={1}>
          <Card>
            <CardMedia
              id={styles.personalInfo__photo}
              image={getAsset('big_avatar.jpg')}
              className={styles.personalInfo__photo}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {localedText('contactMe')}
              </Typography>

              <Divider />

              <Box component="div" m={1} p={1}>
                <ContactLink
                  contactHref={contacts.telegram}
                  contactText={localedText('telegramProfile')}
                  Icon={TelegramIcon}
                />
                <ContactLink
                  contactHref={`mailto:${contacts.email}`}
                  contactText={localedText('mailMe')}
                  Icon={GmailIcon}
                />
                <ContactLink contactHref={contacts.vk} contactText={localedText('vkMe')} Icon={VKIcon} />
                <ContactLink
                  contactHref={contacts.gitHub}
                  contactText={localedText('gitHubProfile')}
                  Icon={GithubIcon}
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
