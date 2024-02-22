import React from 'react';

import { Box, Grid, GridSize, Typography } from '@material-ui/core';
import { QuizStepState, SystemsIds } from '@reducers/core';
import { QuizItem } from '@src/components';
import { GRID_ITEM_RATE } from '@src/constants';

type Props = QuizStepState<SystemsIds> & {
  handleSelectItem: (id: string) => void;
};

export const QuizSelector: React.FC<Props> = ({ items, topic, handleSelectItem }) => (
  <Grid container>
    <Box m={1} p={1} width="100%">
      <Typography variant="h4" component="h2" align="center">
        {topic}
      </Typography>
    </Box>

    <Grid container spacing={2}>
      {items.map(({ id, name, description, image }, _index, items) => {
        const gridRate = GRID_ITEM_RATE / items.length;

        return (
          <Grid item xs={gridRate as GridSize} key={id}>
            <QuizItem name={name} description={description} image={image} onClick={() => handleSelectItem(id)} />
          </Grid>
        );
      })}
    </Grid>
  </Grid>
);
