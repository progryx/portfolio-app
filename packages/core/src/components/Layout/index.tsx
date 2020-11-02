import React from 'react';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';

import { ROUTES_MAP } from '@constants/routesMap';
import {
  AppBar,
  Box,
  Breadcrumbs,
  Container,
  Link,
  Tab,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { HomeOutlined, WorkOutline } from '@material-ui/icons';
import TranslateIcon from '@material-ui/icons/Translate';
import { TabContext, TabList } from '@material-ui/lab';
import { coreActions, coreSelectors } from '@reducers/core';
import { useLocale } from '@src/hooks';
import { useNavigation } from '@src/hooks/useNavigation';
import { useDispatch, useSelector } from '@src/store';

import { DropdownMenu, MenuItem } from '@components/DropdownMenu';

import styles from './styles.scss';

const Crumbs: React.FC = () => {
  const params = useParams();
  const location = useLocation();
  const routeMatch = useRouteMatch();
  const history = useHistory();

  console.log('params', params);
  console.log('location', location);
  console.log('routeMatch', routeMatch);
  console.log('history', history);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
        Material-UI
      </Link>
      <Link color="inherit" href="/getting-started/installation/">
        Core
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
  );
};

export const Layout: React.FC = ({ children }) => {
  const history = useHistory();

  const currentTab = useNavigation();

  const currentLocale = useSelector(coreSelectors.getCurrentLangName);

  const dispatch = useDispatch();

  const localeText = useLocale();

  const localesList: MenuItem[] = [
    {
      description: 'English',
      handleClickItem: () => dispatch(coreActions.setLanguage({ lang: 'EN' })),
    },
    {
      description: 'Русский',
      handleClickItem: () => dispatch(coreActions.setLanguage({ lang: 'RU' })),
    },
  ];

  function hangleChangeLocation(location: string) {
    history.push(`${location}`);
  }

  return (
    <TabContext value={currentTab}>
      <AppBar position="fixed" color="primary" square className={styles.NavBar}>
        <Toolbar>
          <TabList className={styles.NavBar__tabs}>
            <Tab
              classes={{
                wrapper: styles.NavBar__tabItem,
              }}
              label={localeText('aboutMe')}
              onClick={() => hangleChangeLocation(ROUTES_MAP.main)}
              icon={<HomeOutlined fontSize="small" />}
              value="0"
            />
            <Tab
              classes={{
                wrapper: styles.NavBar__tabItem,
              }}
              onClick={() => hangleChangeLocation(ROUTES_MAP.projects)}
              label={localeText('myProjects')}
              icon={<WorkOutline fontSize="small" />}
              value="1"
            />
          </TabList>
          <DropdownMenu
            items={localesList}
            linkMenuText={currentLocale}
            buttonColor="inherit"
            buttonVariant="text"
            buttonIcon={<TranslateIcon />}
          />
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" component="main" className={styles.gridLayout__container}>
        <Crumbs />
        <Box m={0}>{children}</Box>
      </Container>
      <AppBar position="static" color="primary" square component="footer">
        <Box m={1} p={1}>
          <Typography variant="subtitle2" align="center">
            {localeText('footerContent')}
          </Typography>
        </Box>
      </AppBar>
    </TabContext>
  );
};
