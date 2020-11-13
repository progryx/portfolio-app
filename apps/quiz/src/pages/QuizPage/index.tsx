import React from 'react';

import { Grid } from '@material-ui/core';
import { StepsProgress, Wizard } from '@src/components';
import { SelectPrice } from '@steps/SelectPrice';
import { SelectTasks } from '@steps/SelectTasks';
import { SelectType } from '@steps/SelectType';
import { ShowResults } from '@steps/ShowResults';

import styles from './styles.scss';

export enum Steps {
  SelectType = 0,
  SelectPrice = 1,
  SelectTasks = 2,
  ShowResults = 3,
}

export const QuizPage: React.FC = () => {
  return (
    <Grid container className={styles.quizPage__container}>
      <Grid item xs={12}>
        <Wizard>
          <SelectType />
          <SelectPrice />
          <SelectTasks />
          <ShowResults />
        </Wizard>
      </Grid>
      <Grid item xs={12}>
        <div className={styles.quizPage__progress}>
          <StepsProgress />
        </div>
      </Grid>
    </Grid>
  );
};
