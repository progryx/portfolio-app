import React from 'react';
import { useHistory } from 'react-router-dom';

import { ROUTES_MAP } from '@constants/routesMap';
import { AppBar, Box, Container, Tab, Typography } from '@material-ui/core';
import { HomeOutlined, WorkOutline } from '@material-ui/icons';
import { TabContext, TabList } from '@material-ui/lab';
import { useNavigation } from '@src/hooks/useNavigation';

import styles from './styles.scss';

export const Layout: React.FC = ({ children }) => {
  const history = useHistory();

  const currentTab = useNavigation();

  function hangleChangeLocation(location: string) {
    history.push(`${location}`);
  }

  return (
    <TabContext value={currentTab}>
      <AppBar position="fixed" color="primary" square className={styles.NavBar}>
        <TabList className={styles.NavBar__tabs}>
          <Tab
            classes={{
              wrapper: styles.NavBar__tabItem,
            }}
            label="About me"
            onClick={() => hangleChangeLocation(ROUTES_MAP.main)}
            icon={<HomeOutlined fontSize="small" />}
            value="0"
          />
          <Tab
            classes={{
              wrapper: styles.NavBar__tabItem,
            }}
            onClick={() => hangleChangeLocation(ROUTES_MAP.projects)}
            label="My projects"
            icon={<WorkOutline fontSize="small" />}
            value="1"
          />
        </TabList>
      </AppBar>
      <Container maxWidth="lg" component="main" className={styles.gridLayout__container}>
        <Box m={0}>{children}</Box>
      </Container>
      <AppBar position="static" color="primary" square component="footer">
        <Box m={1} p={1}>
          <Typography variant="subtitle2" align="center">
            Nikitin German. Frontend developer. 2014-2020
          </Typography>
        </Box>
      </AppBar>
    </TabContext>
  );
};
