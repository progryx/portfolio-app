import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CircularProgress, Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { mainActions, mainSelectors } from '@reducers/main';

import { GridColumn } from '../Grid/GridColumn';
import { GridHeader } from '../Grid/GridHeader';

import css from './index.module.css';

export const Dashboard: React.FC = () => {
  const cardsByGroup = useSelector(mainSelectors.getCardsByGroup);
  const serverMessage = useSelector(mainSelectors.getServerMessage);
  const isPageReady = useSelector(mainSelectors.getPageReadyStatus);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(mainActions.getCards());
  }, []);

  if (serverMessage !== '') {
    return <Alert severity="error">{serverMessage}</Alert>;
  }

  if (!isPageReady) {
    return <CircularProgress className={css.preloader} />;
  }

  return (
    <React.Fragment>
      <Grid container>
        {cardsByGroup.map((group) => (
          <GridHeader key={group.status} status={group.status} cardsLength={group.cards.length} />
        ))}
      </Grid>
      <Grid container className={css.groups}>
        {cardsByGroup.map((group) => (
          <GridColumn key={group.status} {...group} />
        ))}
      </Grid>
    </React.Fragment>
  );
};
