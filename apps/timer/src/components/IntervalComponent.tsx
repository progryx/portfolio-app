import React from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ButtonGroup,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

type Props = {
  timerInterval: number;
  setTimerInterval: (interval: number) => void;
};

export const IntervalComponent: React.FC<Props> = ({ timerInterval, setTimerInterval }) => {
  const decreaseInterval = () => (timerInterval > 1 ? timerInterval - 1 : 1);
  const increaseInterval = () => timerInterval + 1;

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color="primary" variant="subtitle1">
          Настройка интервала
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color="primary" variant="body1" component="h2">
          Интервал обновления секундомера: {timerInterval} сек.
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <ButtonGroup variant="contained" color="primary">
          <Button onClick={() => setTimerInterval(decreaseInterval())}>-</Button>
          <Button onClick={() => setTimerInterval(increaseInterval())}>+</Button>
        </ButtonGroup>
      </AccordionDetails>
    </Accordion>
  );
};
