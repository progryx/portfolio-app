import React from 'react';

import { Step, StepLabel, Stepper } from '@material-ui/core';

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

export function StepsProgress() {
  const [activeStep] = React.useState(1);
  const steps = getSteps();

  return (
    <Stepper alternativeLabel activeStep={activeStep}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
