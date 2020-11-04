import React from 'react';
import { useHistory } from 'react-router-dom';

import { ROUTES_MAP } from '@constants/routesMap';
import { AppBar, Box, Container, Tab, Toolbar, Typography } from '@material-ui/core';
import { HomeOutlined, WorkOutline } from '@material-ui/icons';
import TranslateIcon from '@material-ui/icons/Translate';
import { TabContext, TabList } from '@material-ui/lab';
import { coreActions, coreSelectors } from '@reducers/core';
import { useDispatch, useSelector } from '@reducers/store';
import { useLocale } from '@src/hooks';
import { useNavigation } from '@src/hooks/useNavigation';

import { Breadcrumbs } from '@components/Breadcrumbs';
import { DropdownMenu, MenuItem } from '@components/DropdownMenu';

import styles from './styles.scss';

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

  const handleChangeLocation = (location: string) => {
    history.push(`${location}`);
  };

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
              onClick={() => handleChangeLocation(ROUTES_MAP.main)}
              icon={<HomeOutlined fontSize="small" />}
              value="0"
            />
            <Tab
              classes={{
                wrapper: styles.NavBar__tabItem,
              }}
              onClick={() => handleChangeLocation(ROUTES_MAP.projects)}
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
        <Breadcrumbs />
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
