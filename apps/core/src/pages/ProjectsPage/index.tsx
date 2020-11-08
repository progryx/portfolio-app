import React from 'react';
import { Provider } from 'react-redux';

import TaskDashboard from '@assets/images/task_dashboard.jpg';
import TimerImage from '@assets/images/timer.png';
import { Box, Grid, Typography } from '@material-ui/core';
import { Code } from '@material-ui/icons';
import { Layout } from '@src/components';
import { ROUTES_MAP } from '@src/constants';
import { useLocale } from '@src/hooks';
import { store } from '@src/reducers/store';
import { useRouter } from 'next/router';

import { ProjectItem, ProjectsItem } from './components/ProjectItem';

const Page: React.FC = () => {
  const localedText = useLocale();

  const router = useRouter();

  const projects: ProjectsItem[] = [
    {
      name: localedText('projectsTimerName'),
      description: localedText('projectsTimerDescription'),
      icon: <Code />,
      imageSrc: TimerImage,
      stack: 'Typescript, React, Material UI',
      openProjectHandler: () => router && router.push(ROUTES_MAP.timer),
    },
    {
      name: localedText('projectsTaskDashboard'),
      description: localedText('projectsTaskDashboardDescription'),
      icon: <Code />,
      imageSrc: TaskDashboard,
      stack: 'Typescript, React, Redux, Redux-Saga, Material UI',
      openProjectHandler: () => router && router.push(ROUTES_MAP.taskDashboard),
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
  );
};

export const ProjectsPage: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Page />
      </Layout>
    </Provider>
  );
};
