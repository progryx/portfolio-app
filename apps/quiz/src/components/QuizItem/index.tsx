import React from 'react';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

import styles from './styles.scss';

type Props = {
  image: string;
  name: string;
  description: string;
  onClick: () => void;
};

export const QuizItem: React.FC<Props> = ({ description, onClick, image, name }) => {
  return (
    <Card>
      <CardActionArea onClick={onClick}>
        <CardMedia className={styles.quizItem__image} image={image} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
