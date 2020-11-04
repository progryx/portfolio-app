import React from 'react';

import { Button, ButtonGroup, Card, CardActions, CardContent, Typography } from '@material-ui/core';

import { IntervalComponent } from './IntervalComponent';

export const TimerComponent: React.FC = () => {
  const [currentTime, setCurrentTime] = React.useState<number>(0);
  const [isActive, setIsActive] = React.useState<boolean>(false);

  const [timerInterval, setTimerInterval] = React.useState<number>(1);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setCurrentTime(0);
    setIsActive(false);
  };

  React.useEffect(() => {
    if (isActive) {
      const intervalId = setInterval(
        () => setCurrentTime((prevTime) => prevTime + timerInterval),
        timerInterval * 1000
      );
      return () => clearInterval(intervalId);
    }
    return;
  }, [isActive, timerInterval]);

  return (
    <Card>
      <CardContent>
        <IntervalComponent timerInterval={timerInterval} setTimerInterval={setTimerInterval} />
        <Typography color="primary" variant="h6">
          Секундомер: {currentTime} сек.
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup variant="contained" color="primary">
          <Button variant="contained" color="primary" onClick={toggleTimer}>
            {isActive ? 'Пауза' : 'Старт'}
          </Button>
          <Button variant="contained" color="secondary" onClick={resetTimer}>
            Стоп
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};
