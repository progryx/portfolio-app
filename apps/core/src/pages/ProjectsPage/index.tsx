import React from 'react';
import { useHistory } from 'react-router-dom';

import TaskDashboard from '@assets/images/task_dashboard.jpg';
import TimerImage from '@assets/images/timer.jpg';
import UsersTable from '@assets/images/users_table.png';
import { Box, Grid, Typography } from '@material-ui/core';
import { Code } from '@material-ui/icons';
import { ROUTES_MAP } from '@src/constants';
import { useLocale } from '@src/hooks';

import { ProjectItem, ProjectsItem } from './components/ProjectItem';

export const ProjectsPage: React.FC = () => {
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
    {
      name: localedText('projectsUsersTable'),
      description: localedText('projectsUsersTableDescription'),
      icon: <Code />,
      imageSrc: UsersTable,
      stack: 'Typescript, React, Redux, Redux-Saga, Material UI',
      openProjectHandler: () => history.push(ROUTES_MAP.usersTable),
    },
    {
      name: localedText('projectsTaskDashboard'),
      description: localedText('projectsTaskDashboardDescription'),
      icon: <Code />,
      imageSrc: TaskDashboard,
      stack: 'Typescript, React, Redux, Redux-Saga, Material UI',
      openProjectHandler: () => history.push(ROUTES_MAP.taskDashboard),
    },
  ];

  return (
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
                <Grid item xs={6} key={index}>
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
  );
};
