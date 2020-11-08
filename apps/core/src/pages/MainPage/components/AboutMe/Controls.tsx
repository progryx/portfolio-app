import React from 'react';

import { Box, Button, Grid } from '@material-ui/core';
import { CloudDownload, Print } from '@material-ui/icons';
import { coreSelectors } from '@reducers/core';
import { useSelector } from '@reducers/store';
import { DropdownMenu, MenuItem } from '@src/components';
import { useLocale } from '@src/hooks';
import { downloadCV, printCV } from '@src/pages/MainPage/components/AboutMe/helpers';
import styles from '@src/pages/MainPage/components/AboutMe/styles.module.scss';

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

const Controls: React.FC = () => {
  const localedText = useLocale();
  const isEnLocale = useSelector(coreSelectors.isEnLanguage);

  const printCvHandler = () => {
    printCV(isEnLocale ? 'EN' : 'RU');
  };

  return (
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
  );
};

export default Controls;
