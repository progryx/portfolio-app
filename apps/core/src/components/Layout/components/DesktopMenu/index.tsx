import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Toolbar } from '@material-ui/core';
import {
  BarChart,
  HomeOutlined,
  ImportantDevices,
  School,
  TrendingUp,
  WorkOutline,
} from '@material-ui/icons';
import { Logo } from '@src/components';
import { ROUTES_MAP } from '@src/constants';
import { useLocale } from '@src/hooks';

import { LocaleBar } from '..';

import styles from './styles.scss';

export const DesktopMenu: React.FC = () => {
  const history = useHistory();

  const localedText = useLocale();

  const handleChangeLocation = (location: string) => {
    history.push(location);
  };
  return (
    <Toolbar className={styles.desktopMenu}>
      <Logo href="#about" onClick={() => handleChangeLocation(`${ROUTES_MAP.main}#about`)} />

      <div className={styles.desktopMenu__items}>
        <Button
          variant="text"
          color="inherit"
          href="#about"
          onClick={() => handleChangeLocation(`${ROUTES_MAP.main}#about`)}
          startIcon={<HomeOutlined fontSize="small" />}
        >
          {localedText('aboutMe')}
        </Button>
        <Button
          variant="text"
          color="inherit"
          href="#skills"
          onClick={() => handleChangeLocation(`${ROUTES_MAP.main}#skills`)}
          startIcon={<ImportantDevices fontSize="small" />}
        >
          {localedText('mySkills')}
        </Button>
        <Button
          variant="text"
          color="inherit"
          href="#skillslevel"
          onClick={() => handleChangeLocation(`${ROUTES_MAP.main}#skillslevel`)}
          startIcon={<BarChart fontSize="small" />}
        >
          {localedText('mySkillsLevel')}
        </Button>
        <Button
          variant="text"
          color="inherit"
          href="#experience"
          onClick={() => handleChangeLocation(`${ROUTES_MAP.main}#experience`)}
          startIcon={<TrendingUp fontSize="small" />}
        >
          {localedText('myExperience')}
        </Button>
        <Button
          variant="text"
          color="inherit"
          href="#education"
          onClick={() => handleChangeLocation(`${ROUTES_MAP.main}#education`)}
          startIcon={<School fontSize="small" />}
        >
          {localedText('myEducation')}
        </Button>
        <Button
          variant="text"
          color="inherit"
          onClick={() => handleChangeLocation(ROUTES_MAP.projects)}
          startIcon={<WorkOutline fontSize="small" />}
        >
          {localedText('myProjects')}
        </Button>
      </div>
      <LocaleBar className={styles.desktopMenu__langBar} />
    </Toolbar>
  );
};
