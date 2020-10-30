import React from 'react';

import { Grid } from '@material-ui/core';
import { TabPanel } from '@material-ui/lab';
import { useNavigation } from '@src/hooks/useNavigation';

import { Content } from './components/Content';
import { PersonalInfo } from './components/PersonalInfo';
import styles from './styles.scss';

export const MainPage: React.FC = () => {
  const currentTab = useNavigation();

  return (
    <TabPanel value={currentTab} id={styles.tabPane}>
      <Grid container>
        <PersonalInfo />
        <Content />
      </Grid>
    </TabPanel>
  );
};
