import React from 'react';

import { ConfigurationItem } from '@constants/configurations';
import { Box, Grid, Paper, Typography } from '@material-ui/core';

import styles from './styles.scss';

type Props = {
  item: ConfigurationItem;
};

export const ResultItem: React.FC<Props> = ({ item }) => {
  return (
    <Box m={1} p={1}>
      <Paper elevation={3}>
        <Grid container>
          <Grid xs={4}>
            <img className={styles.resultItem__image} src={item.image} alt="text" />
          </Grid>
          <Grid xs={8}>
            <Typography>Процессор: {item.name}</Typography>
            <Typography>Описание: {item.description}</Typography>
            <Typography>Цена: {item.price}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
