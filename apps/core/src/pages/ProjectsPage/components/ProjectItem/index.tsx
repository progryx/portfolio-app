import React from 'react';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import { MoreVert as MoreVertIcon, OpenInBrowser as OpenIcon } from '@material-ui/icons';
import { useLocale } from '@src/hooks';

import styles from './styles.module.scss';

export type ProjectsItem = {
  name: string;
  stack: string;
  description: string;
  openProjectHandler: () => void;
  imageSrc: string;
  icon: JSX.Element;
};

export const ProjectItem: React.FC<ProjectsItem> = ({
  description,
  imageSrc,
  icon,
  openProjectHandler,
  name,
  stack,
}) => {
  const localedText = useLocale();

  return (
    <Box m={1} p={1}>
      <Card className={styles.projectItem}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={styles.avatar}>
              {icon}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={stack}
        />
        <CardMedia className={styles.projectItem__preview} image={imageSrc} title="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant="outlined"
            onClick={openProjectHandler}
            color="default"
            startIcon={<OpenIcon />}
          >
            {localedText('openProject')}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
