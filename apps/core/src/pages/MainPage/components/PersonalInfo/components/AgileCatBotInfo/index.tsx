import React from 'react';

import { Box, Button, Card, CardMedia, Typography } from '@material-ui/core';
import { ContactMailOutlined } from '@material-ui/icons';
import { GithubIcon } from '@portfolio-app/icons';
import { contacts } from '@src/constants';
import { useLocale } from '@src/hooks';
import { getAsset } from '@src/utilities';

import styles from './styles.scss';

export function AgileCatBotInfo() {
  const localedText = useLocale();

  return (
    <Box m={1} p={1}>
      <Card className={styles.acbInfo_card} variant="outlined">
        <CardMedia component="img" image={getAsset('acb.png')} alt="Agile Cat Bot" />
        <Box component="div" m={1} p={1} display="flex" flexDirection="column" justifyContent="space-around">
          <Typography variant="body1" color="textSecondary" component="p" align="justify">
            {localedText('agileCatBotInfo')}
          </Typography>
          <Box component="div" display="flex">
            <Box m={1} width="100%">
              <Button
                className={styles.acbInfo_buttons}
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
                className={styles.acbInfo_buttons}
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
