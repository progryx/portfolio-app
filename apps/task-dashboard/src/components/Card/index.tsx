import React from 'react';
import { useDrag } from 'react-dnd';

import { Avatar, Card, CardContent, Chip, Divider, Paper, Typography } from '@material-ui/core';
import classNames from 'classnames';

import { CardData, ItemTypes } from '../../reducers/types';

import css from './index.module.css';

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
        className={css.card}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move',
        }}
      >
        <Card>
          <CardContent className={css.header}>
            <Avatar>{type}</Avatar>
            <Typography color="textSecondary">{projectName}</Typography>
          </CardContent>
          <CardContent
            className={classNames(
              css.status,
              priority &&
                {
                  low: css.low,
                  normal: css.normal,
                  high: css.high,
                }[priority]
            )}
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
