import React from 'react';
import { useDrag } from 'react-dnd';

import { Avatar, Card, CardContent, Chip, Divider, Paper, Typography } from '@material-ui/core';
import classNames from 'classnames';

import { CardData, ItemTypes } from '../../reducers/types';

import styles from './index.module.scss';

export const CardComponent: React.FC<CardData> = ({ projectName, taskData, tags, id, status }) => {
  const { priority, type, description, number } = taskData;

  const [{ isDragging }, dragRef] = useDrag({
    item: {
      type: ItemTypes.CARD,
      id,
      status,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={dragRef}>
      <Paper
        elevation={3}
        className={styles.card}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move',
        }}
      >
        <Card>
          <CardContent className={styles.header}>
            <Avatar>{type}</Avatar>
            <Typography color="textSecondary">{projectName}</Typography>
          </CardContent>
          <CardContent
            className={classNames(styles.status, {
              [styles.low]: priority === 'low',
              [styles.normal]: priority === 'normal',
              [styles.high]: priority === 'high',
            })}
          >
            <Typography color="textSecondary">{number}</Typography>
            <Typography color="textSecondary">{priority}</Typography>
          </CardContent>
          <Divider variant="middle" />
          <CardContent>
            <Typography color="textSecondary">{description}</Typography>
          </CardContent>
          <Divider variant="middle" />
          <CardContent>
            {tags.map((tag) => (
              <Chip key={tag} label={tag} />
            ))}
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
};
