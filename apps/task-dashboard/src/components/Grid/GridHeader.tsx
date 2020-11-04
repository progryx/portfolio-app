import React from 'react';

import { Divider, Grid, Typography } from '@material-ui/core';
import { StatusType } from '@reducers/types';

export const GridHeader: React.FC<{
  status: StatusType;
  cardsLength: number;
}> = ({ status, cardsLength }) => {
  return (
    <Grid item xs={3}>
      <Typography color="error" variant="h6">
        {`${status} (${cardsLength})`}
      </Typography>
      <Divider variant="middle" />
    </Grid>
  );
};
