import React from 'react';

import { Box, Button, Divider, Typography } from '@material-ui/core';
import { CloudDownload, Print } from '@material-ui/icons';
import { coreSelectors } from '@reducers/core';
import { useSelector } from '@reducers/store';
import { DropdownMenu, MenuItem } from '@src/components';
import { useLocale } from '@src/hooks';

import { downloadCV, printCV } from './helpers';
import styles from './styles.scss';

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

export function CVBlock() {
  const localedText = useLocale();
  const isEnLocale = useSelector(coreSelectors.isEnLanguage);

  const printCvHandler = () => {
    printCV(isEnLocale ? 'EN' : 'RU');
  };

  return (
    <Box m={1} p={1}>
      <Typography variant="body2" color="textSecondary" component="p">
        {localedText('downloadMyCv')}
      </Typography>
      <Divider />
      <DropdownMenu
        items={isEnLocale ? downloadEngCvItems : downloadRuCvItems}
        linkMenuText={localedText('downloadMyCv')}
        buttonColor="secondary"
        buttonIcon={<CloudDownload />}
        buttonSize="large"
        buttonClassName={styles.CvBlock_buttons}
      />
      <Box m={1} p={1}>
        <Button
          variant="contained"
          className={styles.CvBlock_buttons}
          color="default"
          startIcon={<Print />}
          onClick={printCvHandler}
        >
          {localedText('printMyCv')}
        </Button>
      </Box>
    </Box>
  );
}
