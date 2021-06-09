import React from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Grid, Typography } from '@material-ui/core';
import { Code } from '@material-ui/icons';
import { ROUTES_MAP } from '@src/constants';
import { useLocale } from '@src/hooks';
import { getAsset } from '@src/utilities';

import { ProjectItem, ProjectsItem } from './components/ProjectItem';

export const ProjectsPage: React.FC = () => {
  const localedText = useLocale();

  const history = useHistory();

  const projects: ProjectsItem[] = [
    {
      name: localedText('projectsTimerName'),
      description: localedText('projectsTimerDescription'),
      icon: <Code />,
      imageSrc: getAsset('timer.jpg'),
      stack: 'Typescript, React, Material UI',
      openProjectHandler: () => history.push(ROUTES_MAP.timer),
    },
    {
      name: localedText('projectsUsersTable'),
      description: localedText('projectsUsersTableDescription'),
      icon: <Code />,
      imageSrc: getAsset('users_table.png'),
      stack: 'Typescript, React, Redux, Redux-Saga, Material UI',
      openProjectHandler: () => history.push(ROUTES_MAP.usersTable),
    },
    {
      name: localedText('projectsTaskDashboard'),
      description: localedText('projectsTaskDashboardDescription'),
      icon: <Code />,
      imageSrc: getAsset('task_dashboard.jpg'),
      stack: 'Typescript, React, Redux, Redux-Saga, Material UI',
      openProjectHandler: () => history.push(ROUTES_MAP.taskDashboard),
    },
    {
      name: localedText('projectsQuiz'),
      description: localedText('projectQuizDescription'),
      icon: <Code />,
      imageSrc: getAsset('quiz.jpg'),
      stack: 'Typescript, React, Redux, Redux-Saga, Material UI',
      openProjectHandler: () => history.push(ROUTES_MAP.quiz),
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
                <Grid item xs={12} md={6} key={index}>
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
