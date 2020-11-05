import React from 'react';
import { useHistory } from 'react-router-dom';

import { ROUTES_MAP } from '@constants/routesMap';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@material-ui/core';
import {
  BarChart,
  HomeOutlined,
  ImportantDevices,
  School,
  TrendingUp,
  WorkOutline,
} from '@material-ui/icons';
import TranslateIcon from '@material-ui/icons/Translate';
import { coreActions, coreSelectors } from '@reducers/core';
import { useDispatch, useSelector } from '@reducers/store';
import { useLocale } from '@src/hooks';

import { Breadcrumbs } from '@components/Breadcrumbs';
import { DropdownMenu, MenuItem } from '@components/DropdownMenu';

import { Logo } from '../Logo';

import styles from './styles.scss';

export const Layout: React.FC = ({ children }) => {
  const history = useHistory();

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
    history.push(location);
  };

  return (
    <>
      <AppBar position="fixed" color="primary" square className={styles.NavBar}>
        <Toolbar className={styles.NavBar__toolbar}>
          <Logo href="#about" onClick={() => handleChangeLocation(`${ROUTES_MAP.main}#about`)} />
          <div className={styles.NavBar__menu}>
            <Button
              variant="text"
              color="inherit"
              href="#about"
              onClick={() => handleChangeLocation(`${ROUTES_MAP.main}#about`)}
              startIcon={<HomeOutlined fontSize="small" />}
            >
              {localeText('aboutMe')}
            </Button>
            <Button
              variant="text"
              color="inherit"
              href="#skills"
              onClick={() => handleChangeLocation(`${ROUTES_MAP.main}#skills`)}
              startIcon={<ImportantDevices fontSize="small" />}
            >
              {localeText('mySkills')}
            </Button>
            <Button
              variant="text"
              color="inherit"
              href="#skillslevel"
              onClick={() => handleChangeLocation(`${ROUTES_MAP.main}#skillslevel`)}
              startIcon={<BarChart fontSize="small" />}
            >
              {localeText('mySkillsLevel')}
            </Button>
            <Button
              variant="text"
              color="inherit"
              href="#experience"
              onClick={() => handleChangeLocation(`${ROUTES_MAP.main}#experience`)}
              startIcon={<TrendingUp fontSize="small" />}
            >
              {localeText('myExperience')}
            </Button>
            <Button
              variant="text"
              color="inherit"
              href="#education"
              onClick={() => handleChangeLocation(`${ROUTES_MAP.main}#education`)}
              startIcon={<School fontSize="small" />}
            >
              {localeText('myEducation')}
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={() => handleChangeLocation(ROUTES_MAP.projects)}
              startIcon={<WorkOutline fontSize="small" />}
            >
              {localeText('myProjects')}
            </Button>
          </div>

          <DropdownMenu
            buttonClassName={styles.NavBar__langButton}
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
    </>
  );
};
