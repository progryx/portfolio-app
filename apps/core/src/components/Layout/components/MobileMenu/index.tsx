import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Drawer, IconButton, Toolbar } from '@material-ui/core';
import {
  BarChart,
  HomeOutlined,
  ImportantDevices,
  School,
  TrendingUp,
  WorkOutline,
} from '@material-ui/icons';
import { Menu as MenuIcon } from '@material-ui/icons';
import { ListItem } from '@src/components';
import { List, Logo } from '@src/components';
import { ROUTES_MAP } from '@src/constants';
import { useLocale } from '@src/hooks';

import { LocaleBar } from '../LocaleBar';

import styles from './styles.scss';

export const MobileMenu: React.FC = () => {
  const history = useHistory();

  const localedText = useLocale();

  const [isOpened, setIsOpened] = useState(false);

  const handleChangeLocation = (location: string) => {
    history.push(location);
  };

  console.log('render');

  const mobileMenuItems: ListItem[] = [
    {
      description: localedText('aboutMe'),
      Icon: <HomeOutlined fontSize="small" />,
      href: '#about',
      onClick: () => {
        handleChangeLocation(`${ROUTES_MAP.main}#about`);
        setIsOpened(false);
      },
    },
    {
      description: localedText('mySkills'),
      Icon: <ImportantDevices fontSize="small" />,
      href: '#skills',
      onClick: () => {
        handleChangeLocation(`${ROUTES_MAP.main}#skills`);
        setIsOpened(false);
      },
    },
    {
      description: localedText('mySkillsLevel'),
      Icon: <BarChart fontSize="small" />,
      href: '#skillslevel',
      onClick: () => {
        handleChangeLocation(`${ROUTES_MAP.main}#skillslevel`);
        setIsOpened(false);
      },
    },
    {
      description: localedText('myExperience'),
      Icon: <TrendingUp fontSize="small" />,
      href: '#experience',
      onClick: () => {
        handleChangeLocation(`${ROUTES_MAP.main}#experience`);
        setIsOpened(false);
      },
    },
    {
      description: localedText('myEducation'),
      Icon: <School fontSize="small" />,
      href: '#education',
      onClick: () => {
        handleChangeLocation(`${ROUTES_MAP.main}#education`);
        setIsOpened(false);
      },
    },
    {
      description: localedText('myProjects'),
      Icon: <WorkOutline fontSize="small" />,
      href: '#education',
      onClick: () => {
        handleChangeLocation(ROUTES_MAP.projects);
        setIsOpened(false);
      },
    },
  ];

  return (
    <>
      <Toolbar className={styles.mobileMenu}>
        <div className={styles.mobileMenu__logo}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsOpened(true)}
          >
            <MenuIcon />
          </IconButton>
          <Logo href="#about" onClick={() => handleChangeLocation(`${ROUTES_MAP.main}#about`)} />
        </div>
        <LocaleBar />
      </Toolbar>
      <Drawer anchor="left" open={isOpened} onClose={() => setIsOpened(false)}>
        <List items={mobileMenuItems} />
      </Drawer>
    </>
  );
};
