import React from 'react';

import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import {
  MoreVert as MoreVertIcon,
  OpenInBrowser as OpenIcon,
  Share as ShareIcon,
} from '@material-ui/icons';

import styles from './styles.scss';

export type ProjectsItem = {
  name: string;
  stack: string;
  description: string;
  onpenProjectHangler: () => void;
  imageSrc: string;
  icon: JSX.Element;
};

export const ProjectItem: React.FC<ProjectsItem> = ({
  description,
  imageSrc,
  icon,
  onpenProjectHangler,
  name,
  stack,
}) => {
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
          <IconButton aria-label="add to favorites" onClick={onpenProjectHangler}>
            <OpenIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};
