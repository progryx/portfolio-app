import React from 'react';

import { Box, Divider, Typography } from '@material-ui/core';
import { GithubIcon, GmailIcon, TelegramIcon, VKIcon } from '@portfolio-app/icons';
import { ContactLink } from '@src/components';
import { contacts } from '@src/constants';
import { useLocale } from '@src/hooks';

export function LinksBlock() {
  const localedText = useLocale();

  return (
    <Box component="div" m={1} p={1}>
      <Typography variant="body2" color="textSecondary" component="p">
        {localedText('contactMe')}
      </Typography>
      <Divider />
      <Box component="div" m={1} p={1}>
        <ContactLink contactHref={contacts.telegram} contactText={localedText('telegramProfile')} Icon={TelegramIcon} />
        <ContactLink contactHref={`mailto:${contacts.email}`} contactText={localedText('mailMe')} Icon={GmailIcon} />
        <ContactLink contactHref={contacts.vk} contactText={localedText('vkMe')} Icon={VKIcon} />
        <ContactLink contactHref={contacts.gitHub} contactText={localedText('gitHubProfile')} Icon={GithubIcon} />
      </Box>
    </Box>
  );
}
