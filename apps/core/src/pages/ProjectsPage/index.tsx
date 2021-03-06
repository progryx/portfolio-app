import React from 'react';
import { useHistory } from 'react-router-dom';

import TimerImage from '@assets/images/timer.png';
import { Box, Grid, Typography } from '@material-ui/core';
import { Code } from '@material-ui/icons';
import { TabPanel } from '@material-ui/lab';
import { ROUTES_MAP } from '@src/constants';
import { useLocale } from '@src/hooks';
import { useNavigation } from '@src/hooks/useNavigation';

import { ProjectItem, ProjectsItem } from './components/ProjectItem';

export const ProjectsPage: React.FC = () => {
  const currentTab = useNavigation('1');

  const localedText = useLocale();

  const history = useHistory();

  const projects: ProjectsItem[] = [
    {
      name: localedText('projectsTimerName'),
      description: localedText('projectsTimerDescription'),
      icon: <Code />,
      imageSrc: TimerImage,
      stack: 'Typescript, React, Material UI',
      openProjectHandler: () => history.push(ROUTES_MAP.timer),
    },
  ];

  return (
    <TabPanel value={currentTab}>
      <Grid container>
        <Grid item xs={12}>
          <Box m={1} p={1}>
            <Typography variant="h4">{localedText('myProjects')}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box m={1} p={1}>
            <Grid container>
              {projects.map(
                ({ name, description, icon, stack, imageSrc, openProjectHandler }, index) => (
                  <Grid item xs={4} key={index}>
                    <ProjectItem
                      name={name}
                      description={description}
                      icon={icon}
                      stack={stack}
                      imageSrc={imageSrc}
                      openProjectHandler={openProjectHandler}
                    />
                  </Grid>
                )
              )}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </TabPanel>
  );
};
