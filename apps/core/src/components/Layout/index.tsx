import React from 'react';

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
import Link from 'next/link';

import { Breadcrumbs } from '@components/Breadcrumbs';
import { DropdownMenu, MenuItem } from '@components/DropdownMenu';

import { Logo } from '../Logo';

import styles from './styles.module.scss';

export const Layout: React.FC = ({ children }) => {
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

  return (
    <>
      <AppBar position="fixed" color="primary" square className={styles.NavBar}>
        <Toolbar className={styles.NavBar__toolbar}>
          <Logo href="/#about" />
          <div className={styles.NavBar__menu}>
            <Link href="/#about">
              <Button variant="text" color="inherit" startIcon={<HomeOutlined fontSize="small" />}>
                {localeText('aboutMe')}
              </Button>
            </Link>
            <Link href="/#skills">
              <Button
                variant="text"
                color="inherit"
                startIcon={<ImportantDevices fontSize="small" />}
              >
                {localeText('mySkills')}
              </Button>
            </Link>
            <Link href="/#skillslevel">
              <Button variant="text" color="inherit" startIcon={<BarChart fontSize="small" />}>
                {localeText('mySkillsLevel')}
              </Button>
            </Link>
            <Link href="/#skillslevel">
              <Button variant="text" color="inherit" startIcon={<TrendingUp fontSize="small" />}>
                {localeText('myExperience')}
              </Button>
            </Link>
            <Link href="/#education">
              <Button variant="text" color="inherit" startIcon={<School fontSize="small" />}>
                {localeText('myEducation')}
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="text" color="inherit" startIcon={<WorkOutline fontSize="small" />}>
                {localeText('myProjects')}
              </Button>
            </Link>
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
