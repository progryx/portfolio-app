import React from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';

import { Grid } from '@material-ui/core';
import { mainActions } from '@reducers/main';
import { Cards, DragItem, ItemTypes, StatusType } from '@reducers/types';
import { isColumnStatusValidForDrop } from '@src/helpers';
import classNames from 'classnames';

import { CardComponent } from '../Card';

import css from './index.module.css';

export const GridColumn: React.FC<{
  status: StatusType;
  cards: Cards;
}> = ({ status, cards }) => {
  const dispatch = useDispatch();

  const [{ isOver, canDrop }, drop] = useDrop<DragItem, unknown, { isOver: boolean; canDrop: boolean }>({
    accept: ItemTypes.CARD,
    drop: (item) => {
      dispatch(
        mainActions.moveCard({
          id: item.id,
          status: {
            from: item.status,
            to: status,
          },
        })
      );
    },
    canDrop: (item) => isColumnStatusValidForDrop(item.status, status),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <Grid
      className={classNames(isOver && !canDrop && css.isUnavailableToDrag, isOver && canDrop && css.isAvailableToDrag)}
      ref={drop}
      item
      xs={3}
    >
      {cards.map((card) => (
        <CardComponent key={card.id} {...card} />
      ))}
    </Grid>
  );
};
